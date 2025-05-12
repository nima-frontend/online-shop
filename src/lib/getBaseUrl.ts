export function getBaseUrl() {
  if (typeof window !== "undefined") return ""; // Client-side
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // Vercel
  return "http://localhost:3000"; // dev SSR 
}
