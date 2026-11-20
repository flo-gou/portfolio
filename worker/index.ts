/**
 * Worker Cloudflare — sert le site statique (out/) via le binding ASSETS.
 * Déploiement : Workers Static Assets (voir wrangler.jsonc).
 */

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
}

const handler = {
  async fetch(request: Request, env: Env): Promise<Response> {
    return env.ASSETS.fetch(request);
  },
};

export default handler;
