export function getWebsiteName(url: string): string {
  try {
    const parsedUrl = new URL(url);
    const hostName = parsedUrl.hostname.replace(/^www\./, '');
    const parts = hostName.split('.');

    if (parts.length === 1) return parts[0];
    const domain = parts[parts.length - 2];

    return domain.charAt(0).toUpperCase() + domain.slice(1);
  }
  catch {
    return "Unknown"
  }
}
