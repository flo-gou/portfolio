/**
 * Cloudflare Pages Function — réception du formulaire de contact.
 * Route : POST /api/contact
 *
 * Livraison via Resend si RESEND_API_KEY est défini (Cloudflare → Settings →
 * Environment variables). Sinon, la requête est acceptée sans livraison
 * (le front affiche la confirmation + propose un repli mailto).
 *
 * Variables d'env (Cloudflare Pages) :
 *   RESEND_API_KEY  — clé API Resend
 *   CONTACT_TO      — destinataire (défaut: flo.gouesse@gmail.com)
 *   CONTACT_FROM    — expéditeur vérifié (défaut: onboarding@resend.dev)
 */

type Env = {
  RESEND_API_KEY?: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
};

type Ctx = { request: Request; env: Env };

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function isEmail(v: unknown): v is string {
  return typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function onRequestPost({ request, env }: Ctx): Promise<Response> {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
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

    if (!res.ok) {
      return json({ error: "Envoi impossible" }, 502);
    }
    return json({ ok: true, delivered: true });
  } catch {
    return json({ error: "Erreur serveur" }, 500);
  }
}
