import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  OnDestroy, OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { infoNav, primaryNav } from '../../content/site-content';
import {fromEvent, throttleTime, map} from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements AfterViewInit, OnDestroy {
  isMenuOpen = false;
  isCompact = false;
  readonly primary = primaryNav;
  readonly secondary = infoNav;

  private readonly onScrollBound = () => this.syncCompactState();
  private readonly onResizeBound = () => this.syncCompactState();
  private readonly isBrowser: boolean;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    @Inject(PLATFORM_ID) platformId: object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) {
      return;
    }

    window.addEventListener('scroll', this.onScrollBound, { passive: true });
    window.addEventListener('resize', this.onResizeBound, { passive: true });
    this.syncCompactState();
  }

  ngOnDestroy(): void {
    if (!this.isBrowser) {
      return;
    }

    window.removeEventListener('scroll', this.onScrollBound);
    window.removeEventListener('resize', this.onResizeBound);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.syncCompactState();
  }

  closeMenu(): void {
    console.log("run close")
    this.isMenuOpen = false;
    this.syncCompactState();
  }

  private syncCompactState(): void {
    if (!this.isBrowser) {
      this.isCompact = false;
      return;
    }

    const isDesktop = window.innerWidth >= 768;
    const scrollTop =
      window.pageYOffset || this.document.documentElement.scrollTop || 0;
    this.isCompact = isDesktop && !this.isMenuOpen && scrollTop > 8;
  }
}
