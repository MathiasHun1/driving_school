import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Mocisuli Budapest | Motoros iskola és jogosítvány',
    data: {
      seo: {
        description:
          'Motoros iskola Budapesten tapasztalt oktatókkal, kategóriás képzésekkel.',
      },
    },
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'arak',
    title: 'Mocisuli Budapest | Motoros jogosítvány árak',
    data: {
      seo: {
        description:
          'Tekintse meg a motoros kategóriákhoz tartozó képzési díjakat, csomagokat és a főbb tudnivalókat.',
      },
    },
    loadComponent: () =>
      import('./pages/prices/prices.component').then((m) => m.PricesComponent),
  },
  {
    path: 'oktatok',
    title: 'Mocisuli Budapest | Motoros oktatók',
    data: {
      seo: {
        description:
          'Ismerje meg a Mocisuli motoros oktatóit, oktatási szemléletét és azt, mire számíthat a gyakorlati felkészítés során.',
      },
    },
    loadComponent: () =>
      import('./pages/instructors/instructors.component').then(
        (m) => m.InstructorsComponent,
      ),
  },
  {
    path: 'jarmuvek',
    title: 'Mocisuli Budapest | Oktató járművek',
    data: {
      seo: {
        description:
          'Nézze meg a motoros képzéshez használt oktató járműveket kategóriánként, és ismerje meg a járműparkot.',
      },
    },
    loadComponent: () =>
      import('./pages/vehicles/vehicles.component').then(
        (m) => m.VehiclesComponent,
      ),
  },
  {
    path: 'tajekoztato',
    title: 'Mocisuli Budapest | Tanulói tájékoztató',
    data: {
      seo: {
        description:
          'Tanulói tájékoztatók és vállalkozási feltételek motoros kategóriák szerint, letölthető PDF dokumentumokkal.',
      },
    },
    loadComponent: () =>
      import('./pages/info/info.component').then((m) => m.InfoComponent),
  },
  {
    path: 'kategoriak',
    title: 'Mocisuli Budapest | Motoros kategóriák',
    data: {
      seo: {
        description:
          'Motoros kategóriák, feltételek és jogosultságok egy helyen: AM, A1, A2 és A kategóriás képzések áttekintése.',
      },
    },
    loadComponent: () =>
      import('./pages/categories/categories.component').then(
        (m) => m.CategoriesComponent,
      ),
  },
  {
    path: 'am-kategoria',
    title: 'Mocisuli Budapest | AM kategória',
    data: {
      seo: {
        description:
          'AM kategóriás motoros képzés feltételei, vizsgadíjai és tudnivalói a Mocisuli oldalán.',
      },
    },
    loadComponent: () =>
      import('./pages/category-am/category-am.component').then(
        (m) => m.CategoryAmComponent,
      ),
  },
  {
    path: 'a1-kategoria-b-vel',
    title: 'Mocisuli Budapest | A1 kategória B-vel',
    data: {
      seo: {
        description:
          'A1 kategória B jogosítvánnyal: feltételek, vizsgák és a képzés legfontosabb tudnivalói.',
      },
    },
    loadComponent: () =>
      import('./pages/category-a1b/category-a1b.component').then(
        (m) => m.CategoryA1bComponent,
      ),
  },
  {
    path: 'elso-lepes',
    title: 'Mocisuli Budapest | Első lépések a gyakorlathoz',
    data: {
      seo: {
        description:
          'Első lépések a motoros gyakorlati oktatáshoz: kötelező felszerelés, helyszínek és fontos tudnivalók.',
      },
    },
    loadComponent: () =>
      import('./pages/first-steps/first-steps.component').then(
        (m) => m.FirstStepsComponent,
      ),
  },
  {
    path: 'a1-kategoria',
    title: 'Mocisuli Budapest | A1 kategória',
    data: {
      seo: {
        description:
          'A1 kategóriás képzés 125 cm3-ig: feltételek, vizsgadíjak és részletes tudnivalók egy oldalon.',
      },
    },
    loadComponent: () =>
      import('./pages/category-a1/category-a1.component').then(
        (m) => m.CategoryA1Component,
      ),
  },
  {
    path: 'a2-kategoria',
    title: 'Mocisuli Budapest | A2 kategória',
    data: {
      seo: {
        description:
          'A2 kategóriás motoros jogosítvány feltételei, vizsgadíjai és fontos képzési információi.',
      },
    },
    loadComponent: () =>
      import('./pages/category-a2/category-a2.component').then(
        (m) => m.CategoryA2Component,
      ),
  },
  {
    path: 'a-kategoria',
    title: 'Mocisuli Budapest | A kategória',
    data: {
      seo: {
        description:
          'A kategóriás motoros jogosítvány tudnivalói, vizsgák és felvételi feltételek a Mocisuli oldalán.',
      },
    },
    loadComponent: () =>
      import('./pages/category-a/category-a.component').then(
        (m) => m.CategoryAComponent,
      ),
  },
  {
    path: 'kresz',
    title: 'Mocisuli Budapest | Motoros KRESZ felkészítés',
    data: {
      seo: {
        description:
          'Motoros fókuszú KRESZ felkészítés és elméleti tudnivalók a jogosítvány megszerzéséhez.',
      },
    },
    loadComponent: () =>
      import('./pages/kresz/kresz.component').then((m) => m.KreszComponent),
  },
  {
    path: 'kapcsolat',
    title: 'Mocisuli Budapest | Kapcsolat',
    data: {
      seo: {
        description:
          'Kapcsolatfelvétel a Mocisulival: elérhetőségek, cím, telefon, e-mail és üzenetküldési lehetőség.',
      },
    },
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'about',
    redirectTo: 'oktatok',
  },
  {
    path: '**',
    title: 'Mocisuli Budapest | 404',
    data: {
      seo: {
        description:
          'A keresett oldal nem található. Térjen vissza a főoldalra vagy használja a navigációt.',
        robots: 'noindex,follow',
      },
    },
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (m) => m.NotFoundComponent,
      ),
  },
];
