const PROJECTS = {
  'chrono-shards': 'prj_BK8OUol5PCEoPfcaJZnHXPwkgDP4',
  'dead-signal': 'prj_lF0qOAUbkxt07mNPI0SgIQKAi3IK',
  'neon-duel-beats': 'prj_kFvsBvjlPB52OLjzBIXOUUEZZj7f',
  'arena-of-champions': 'prj_3MUHBh4RKfQgqWwP5gN7etU2c90a',
  'arqueiro-lendario': 'prj_Sa9D4XBFZ86aDqmE1HdbAdn45zvy',
  'blood-machine': 'prj_2rbGIFDHyVTO6bF7NG2IIwj1EwZD',
  'heroes-battle': 'prj_DBfX8Ja1Gu6xnkLLkMd2JJlzO1Sv',
  'knight-of-valor': 'prj_sisvPmCQnpkbye3Tazxct37i3Ghn',
  'racing-stars': 'prj_f7wIzSN7iYI7FGq2z1HkJswK9tg4',
  'neon-frontier': 'prj_Fq23uDlyuuKeKaPZxoKHuUqGY1ix',
  'feiticaria': 'prj_t3iCJ8u6kOZ6Qe3ns4FMVFZgiTua',
  'shuriken-master': 'prj_6HuSr4TgUhsMgJQgejvTVe2JwnzX'
};

const API_BASE = 'https://api.vercel.com';
const REQUEST_TIMEOUT_MS = 8000;

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
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
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json'
    },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS)
  });

  const body = await response.json().catch(() => null);
  if (!response.ok) {
    const message = body?.error?.message || body?.message || `Vercel API returned ${response.status}`;
    throw new Error(message);
  }

  return body;
}

async function loadProjectInfo(projectId, token, teamId) {
  const [project, deploymentsResponse] = await Promise.all([
    vercelFetch(`/v9/projects/${encodeURIComponent(projectId)}`, token, teamId),
    vercelFetch(`/v6/deployments?projectId=${encodeURIComponent(projectId)}&target=production&limit=1&state=READY`, token, teamId)
  ]);

  const latestDeployment = Array.isArray(deploymentsResponse?.deployments)
    ? deploymentsResponse.deployments[0]
    : null;

  return {
    createdAt: toIso(project?.createdAt),
    updatedAt: toIso(latestDeployment?.ready ?? latestDeployment?.createdAt ?? latestDeployment?.created),
    status: 'ok'
  };
}

export default {
  async fetch(request) {
    if (!['GET', 'HEAD'].includes(request.method)) {
      return json({ ok: false, error: 'Method not allowed' }, 405, { Allow: 'GET, HEAD' });
    }

    const token = process.env.VERCEL_API_TOKEN;
    const teamId = process.env.VERCEL_TEAM_ID || '';

    if (!token) {
      return json({
        ok: false,
        error: 'VERCEL_API_TOKEN is not configured.'
      }, 500, { 'Cache-Control': 'no-store' });
    }

    const entries = await Promise.all(
      Object.entries(PROJECTS).map(async ([gameId, projectId]) => {
        try {
          const info = await loadProjectInfo(projectId, token, teamId);
          return [gameId, info];
        } catch (error) {
          console.error(`[games-info] ${gameId}:`, error);
          return [gameId, {
            createdAt: null,
            updatedAt: null,
            status: 'error'
          }];
        }
      })
    );

    const games = Object.fromEntries(entries);
    const successCount = entries.filter(([, info]) => info.status === 'ok').length;

    const payload = {
      ok: successCount > 0,
      generatedAt: new Date().toISOString(),
      games
    };

    if (request.method === 'HEAD') {
      return new Response(null, {
        status: 200,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
        }
      });
    }

    return json(payload, successCount > 0 ? 200 : 502);
  }
};
