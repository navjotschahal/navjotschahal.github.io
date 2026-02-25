export function resolveUrl(url) {
  if (!url) return url;
  try {
    const p = new URL(url);
    if (p.hostname === 'youtu.be') {
      return `https://www.youtube.com/embed${p.pathname}`;
    }
    if ((p.hostname === 'www.youtube.com' || p.hostname === 'youtube.com')) {
      if (p.pathname === '/watch') {
        const v = p.searchParams.get('v');
        if (v) return `https://www.youtube.com/embed/${v}`;
      }
      if (p.pathname.startsWith('/shorts/')) {
        return `https://www.youtube.com/embed${p.pathname.replace('/shorts', '')}`;
      }
    }
    return url; // It's a full URL but not YouTube embed
  } catch { 
    // It's a relative path
    // If it doesn't start with / and is not an external URL, prepend base
    if (!url.startsWith('/') && !url.startsWith('http')) {
      // Use import.meta.env.BASE_URL which is provided by Vite
      // Ensure no double slashes if BASE_URL ends with /
      const base = import.meta.env.BASE_URL.endsWith('/') 
        ? import.meta.env.BASE_URL 
        : `${import.meta.env.BASE_URL}/`;
      
      return `${base}${url}`;
    }
  }
  return url;
}
