// config/site.ts
export const siteConfig = {
  baseUrl: import.meta.env.VITE_BASE_URL || "http://localhost:5173",
  name: "Piyush Tiwari",
  title: "Piyush Tiwari — AI & ML Portfolio",
};

// Helper to build full URLs for public assets
export function assetUrl(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${siteConfig.baseUrl}/${cleanPath}`;
}