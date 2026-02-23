import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Motorcycle License Training | RoadStart',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    title: 'About Our Motorcycle School | RoadStart',
    loadComponent: () =>
      import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
