import { DOCUMENT } from '@angular/common';
import { DestroyRef, Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter, startWith } from 'rxjs';
import { contactData } from '../content/site-content';
import {
  buildAbsoluteUrl,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  RouteSeo,
  SITE_NAME,
  SITE_URL,
} from './seo.config';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly title = inject(Title);

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        startWith(null),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => this.updateRouteSeo());
  }

  private updateRouteSeo(): void {
    const route = this.getLeafRoute(this.router.routerState.snapshot.root);
    const routeSeo = route.data['seo'] as RouteSeo | undefined;
    const routeTitle = this.title.getTitle() || DEFAULT_TITLE;
    const description = routeSeo?.description || DEFAULT_DESCRIPTION;
    const robots = routeSeo?.robots || 'index,follow';
    const currentPath = this.router.url.split(/[?#]/, 1)[0] || '/';
    const canonicalUrl = buildAbsoluteUrl(currentPath);

    this.document.documentElement.lang = 'hu';

    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: robots });
    this.meta.updateTag({ property: 'og:locale', content: 'hu_HU' });
    this.meta.updateTag({ property: 'og:site_name', content: SITE_NAME });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: routeTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: routeTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });

    this.updateLinkTag('canonical', canonicalUrl);
    this.updateLinkTag('alternate', canonicalUrl, { hreflang: 'hu-HU' });
    this.updateStructuredData(routeTitle, description, canonicalUrl);
  }

  private getLeafRoute(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    let current = route;

    while (current.firstChild) {
      current = current.firstChild;
    }

    return current;
  }

  private updateLinkTag(
    rel: string,
    href: string,
    attributes: Record<string, string> = {},
  ): void {
    const attributeSelector = Object.entries(attributes)
      .map(([key, value]) => `[${key}="${value}"]`)
      .join('');
    const selector = `link[rel="${rel}"]${attributeSelector}`;
    let link = this.document.head.querySelector(selector) as HTMLLinkElement | null;

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', rel);

      for (const [key, value] of Object.entries(attributes)) {
        link.setAttribute(key, value);
      }

      this.document.head.appendChild(link);
    }

    link.setAttribute('href', href);
  }

  private updateStructuredData(
    title: string,
    description: string,
    canonicalUrl: string,
  ): void {
    const payload = [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: 'hu-HU',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: contactData.school,
        url: SITE_URL,
        telephone: contactData.phone,
        email: contactData.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: contactData.address,
          addressCountry: 'HU',
        },
        image: buildAbsoluteUrl('logo.png'),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        description,
        url: canonicalUrl,
        inLanguage: 'hu-HU',
        isPartOf: {
          '@type': 'WebSite',
          name: SITE_NAME,
          url: SITE_URL,
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: this.buildBreadcrumbs(canonicalUrl),
      },
    ];

    let script = this.document.getElementById('app-seo-jsonld') as HTMLScriptElement | null;

    if (!script) {
      script = this.document.createElement('script');
      script.id = 'app-seo-jsonld';
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(payload);
  }

  private buildBreadcrumbs(canonicalUrl: string): Array<Record<string, number | string>> {
    const path = this.router.url.split(/[?#]/, 1)[0] || '/';
    const segments = path.split('/').filter(Boolean);
    const breadcrumbs: Array<Record<string, number | string>> = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Főoldal',
        item: SITE_URL,
      },
    ];

    if (!segments.length) {
      return breadcrumbs;
    }

    breadcrumbs.push({
      '@type': 'ListItem',
      position: 2,
      name: this.title.getTitle().replace(`${SITE_NAME} | `, ''),
      item: canonicalUrl,
    });

    return breadcrumbs;
  }
}
