const API_BASE = 'https://api.vercel.com';
const REQUEST_TIMEOUT_MS = 8000;
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://lyzbwyhpeyxhrkfvnlfd.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_zA4KBJNOchE7JQityfbMxw_dghLUPM9';

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      ...extraHeaders
    }
  });
}

function toIso(value) {
  if (value == null) return null;
  const numeric = typeof value === 'string' && /^\d+$/.test(value) ? Number(value) : value;
  const date = new Date(numeric);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

function buildUrl(path, teamId) {
  const url = new URL(path, API_BASE);
  if (teamId) url.searchParams.set('teamId', teamId);
  return url;
}

async function vercelFetch(path, token, teamId) {
  const response = await fetch(buildUrl(path, teamId), {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS)
  });
  const body = await response.json().catch(() => null);
  if (!response.ok) throw new Error(body?.error?.message || body?.message || `Vercel API returned ${response.status}`);
  return body;
}

async function loadProjectInfo(projectId, token, teamId) {
  const [project, deploymentsResponse] = await Promise.all([
    vercelFetch(`/v9/projects/${encodeURIComponent(projectId)}`, token, teamId),
    vercelFetch(`/v6/deployments?projectId=${encodeURIComponent(projectId)}&target=production&limit=1&state=READY`, token, teamId)
  ]);
  const latestDeployment = Array.isArray(deploymentsResponse?.deployments) ? deploymentsResponse.deployments[0] : null;
  return {
    createdAt: toIso(project?.createdAt),
    updatedAt: toIso(latestDeployment?.ready ?? latestDeployment?.createdAt ?? latestDeployment?.created),
    status: 'ok'
  };
}

async function loadPublishedProjects() {
  const url = new URL('/rest/v1/games', SUPABASE_URL);
  url.searchParams.set('published', 'eq.true');
  url.searchParams.set('vercel_project_id', 'not.is.null');
  url.searchParams.set('select', 'id,vercel_project_id');
  const response = await fetch(url, {
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      Accept: 'application/json'
    },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS)
  });
  if (!response.ok) throw new Error(`Supabase catalog returned ${response.status}`);
  const rows = await response.json();
  return Array.isArray(rows) ? rows.filter(row => row?.id && row?.vercel_project_id) : [];
}

export default {
  async fetch(request) {
    if (!['GET', 'HEAD'].includes(request.method)) return json({ ok:false, error:'Method not allowed' }, 405, { Allow:'GET, HEAD' });

    const token = process.env.VERCEL_API_TOKEN;
    const teamId = process.env.VERCEL_TEAM_ID || '';
    if (!token) return json({ ok:false, error:'VERCEL_API_TOKEN is not configured.' }, 500, { 'Cache-Control':'no-store' });

    let projects;
    try {
      projects = await loadPublishedProjects();
    } catch (error) {
      console.error('[games-info] catalog:', error);
      return json({ ok:false, error:'Catalog unavailable.' }, 502);
    }

    const entries = await Promise.all(projects.map(async row => {
      try {
        return [row.id, await loadProjectInfo(row.vercel_project_id, token, teamId)];
      } catch (error) {
        console.error(`[games-info] ${row.id}:`, error);
        return [row.id, { createdAt:null, updatedAt:null, status:'error' }];
      }
    }));

    const games = Object.fromEntries(entries);
    const successCount = entries.filter(([, info]) => info.status === 'ok').length;
    const payload = { ok: successCount > 0 || entries.length === 0, generatedAt:new Date().toISOString(), games };

    if (request.method === 'HEAD') return new Response(null, { status:200, headers:{ 'Content-Type':'application/json; charset=utf-8', 'Cache-Control':'public, s-maxage=60, stale-while-revalidate=300' } });
    return json(payload, successCount > 0 || entries.length === 0 ? 200 : 502);
  }
};
