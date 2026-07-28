/**
 * URL de produção do site, resolvido uma vez e reutilizado no metadata, no
 * sitemap e no robots. A Vercel injeta VERCEL_PROJECT_PRODUCTION_URL sozinha.
 * Quando fechares o domínio, troca isto por uma linha fixa:
 *   export const siteUrl = "https://o-teu-dominio.pt";
 */
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";
