import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Mocisuli | Főoldal',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'arak',
    title: 'Mocisuli | Árak',
    loadComponent: () =>
      import('./pages/prices/prices.component').then((m) => m.PricesComponent),
  },
  {
    path: 'oktatok',
    title: 'Mocisuli | Oktatók',
    loadComponent: () =>
      import('./pages/instructors/instructors.component').then(
        (m) => m.InstructorsComponent,
      ),
  },
  {
    path: 'jarmuvek',
    title: 'Mocisuli | Járművek',
    loadComponent: () =>
      import('./pages/vehicles/vehicles.component').then(
        (m) => m.VehiclesComponent,
      ),
  },
  {
    path: 'tajekoztato',
    title: 'Mocisuli | Tájékoztató',
    loadComponent: () =>
      import('./pages/info/info.component').then((m) => m.InfoComponent),
  },
  {
    path: 'kategoriak',
    title: 'Mocisuli | Kategóriák',
    loadComponent: () =>
      import('./pages/categories/categories.component').then(
        (m) => m.CategoriesComponent,
      ),
  },
  {
    path: 'am-kategoria',
    title: 'Mocisuli | AM kategória',
    loadComponent: () =>
      import('./pages/category-am/category-am.component').then(
        (m) => m.CategoryAmComponent,
      ),
  },
  {
    path: 'a1-kategoria-b-vel',
    title: 'Mocisuli | A1 kategória B-vel',
    loadComponent: () =>
      import('./pages/category-a1b/category-a1b.component').then(
        (m) => m.CategoryA1bComponent,
      ),
  },
  {
    path: 'elso-lepes',
    title: 'Mocisuli | Első lépés',
    loadComponent: () =>
      import('./pages/first-steps/first-steps.component').then(
        (m) => m.FirstStepsComponent,
      ),
  },
  {
    path: 'a1-kategoria',
    title: 'Mocisuli | A1 kategória',
    loadComponent: () =>
      import('./pages/category-a1/category-a1.component').then(
        (m) => m.CategoryA1Component,
      ),
  },
  {
    path: 'a2-kategoria',
    title: 'Mocisuli | A2 kategória',
    loadComponent: () =>
      import('./pages/category-a2/category-a2.component').then(
        (m) => m.CategoryA2Component,
      ),
  },
  {
    path: 'a-kategoria',
    title: 'Mocisuli | A kategória',
    loadComponent: () =>
      import('./pages/category-a/category-a.component').then(
        (m) => m.CategoryAComponent,
      ),
  },
  {
    path: 'kresz',
    title: 'Mocisuli | KRESZ',
    loadComponent: () =>
      import('./pages/kresz/kresz.component').then((m) => m.KreszComponent),
  },
  {
    path: 'kapcsolat',
    title: 'Mocisuli | Kapcsolat',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'about',
    redirectTo: 'oktatok',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
