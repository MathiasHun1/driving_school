import { RenderMode, ServerRoute } from '@angular/ssr';
import { INDEXABLE_ROUTES } from './seo/seo.config';

export const serverRoutes: ServerRoute[] = [
  ...INDEXABLE_ROUTES.map((path) => ({
    path,
    renderMode: RenderMode.Prerender as const,
  })),
  {
    path: '**',
    renderMode: RenderMode.Client as const,
  },
];
