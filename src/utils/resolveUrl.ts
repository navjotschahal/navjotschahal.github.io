/**
 * Resolves URLs dynamically for Vite.
 * Handles external links, empty strings, and public folder assets.
 */
export const resolveUrl = (path: string | undefined | null): string => {
  if (!path) return '';

  // Return immediately if it's already an absolute external URL (like your CDN)
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//')) {
    return path;
  }

  // For public folder assets, prepend Vite's base path (crucial for GitHub Pages)
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
