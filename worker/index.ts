/**
 * Worker Cloudflare — sert le site statique (out/) via le binding ASSETS.
 * Déploiement : Workers Static Assets (voir wrangler.jsonc).
 *
 * Il passe avant les fichiers (`run_worker_first`) pour une seule raison :
 * renvoyer www.flo-gou.com vers l'adresse sans www, la seule communiquée.
 */
import { siteUrl } from "../src/lib/site";

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
}

const apex = new URL(siteUrl).hostname;

const handler = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.hostname === `www.${apex}`) {
      url.hostname = apex;
      url.protocol = "https:"; // un seul saut, même depuis http://www
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};

export default handler;
