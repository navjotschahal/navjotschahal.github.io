/**
 * Resolves static asset URLs dynamically for Vite.
 * @param path - The relative path to the asset (e.g., '../assets/image.png')
 * @returns The fully resolved URL string
 */
export const resolveUrl = (path: string): string => {
  return new URL(path, import.meta.url).href;
};
