export interface RouteSeo {
  description: string;
  robots?: string;
}

export const SITE_URL = 'https://mocisuli.hu';
export const SITE_NAME = 'Mocisuli Budapest';
export const DEFAULT_TITLE = 'Mocisuli Budapest | Motoros iskola és jogosítvány';
export const DEFAULT_DESCRIPTION =
  'Motoros iskola Budapesten kategóriás képzésekkel, oktatókkal, járműparkkal, árakkal és tájékoztatókkal.';

export const INDEXABLE_ROUTES = [
  '',
  'arak',
  'oktatok',
  'jarmuvek',
  'tajekoztato',
  'kategoriak',
  'am-kategoria',
  'a1-kategoria-b-vel',
  'elso-lepes',
  'a1-kategoria',
  'a2-kategoria',
  'a-kategoria',
  'kresz',
  'kapcsolat',
] as const;

export function buildAbsoluteUrl(path: string): string {
  const normalizedPath = path === '/' ? '' : path.replace(/^\/+/, '');
  return normalizedPath ? `${SITE_URL}/${normalizedPath}` : SITE_URL;
}
