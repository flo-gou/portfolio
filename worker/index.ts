/**
 * Worker Cloudflare — sert le site statique (out/) via le binding ASSETS
 * et gère l'endpoint POST /api/contact (formulaire de contact).
 *
 * Déploiement : Workers Static Assets (voir wrangler.jsonc).
 * Variables d'env (Cloudflare → Settings → Variables) :
 *   RESEND_API_KEY — clé Resend (sinon le message est accepté sans livraison)
 *   CONTACT_TO     — destinataire (défaut: flo.gouesse@gmail.com)
 *   CONTACT_FROM   — expéditeur vérifié (défaut: onboarding@resend.dev)
 */

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  RESEND_API_KEY?: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function isEmail(v: unknown): v is string {
  return typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ error: "Requête invalide" }, 400);
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = body.email;
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !isEmail(email) || message.length < 2) {
    return json({ error: "Champs manquants ou invalides" }, 422);
  }

  const key = env.RESEND_API_KEY;
  const to = env.CONTACT_TO ?? "flo.gouesse@gmail.com";
  const from = env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>";

  // Pas de clé configurée : on accepte sans livrer.
  if (!key) {
    return json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio — message de ${name}`,
        text: `De : ${name} <${email}>\n\n${message}`,
      }),
    });
    if (!res.ok) return json({ error: "Envoi impossible" }, 502);
    return json({ ok: true, delivered: true });
  } catch {
    return json({ error: "Erreur serveur" }, 500);
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/api/contact") {
      if (request.method !== "POST") {
        return json({ error: "Méthode non autorisée" }, 405);
      }
      return handleContact(request, env);
    }
    // Tout le reste : le site statique.
    return env.ASSETS.fetch(request);
  },
};
