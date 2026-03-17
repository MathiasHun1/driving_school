export interface NavItem {
  label: string;
  path: string;
}

export interface PriceCard {
  title: string;
  subtitle: string;
  price: string;
  items: string[];
}

export interface Instructor {
  name: string;
  role: string;
  bio: string;
  specialties: string[];
}

export interface Vehicle {
  category: string;
  model: string;
  power: string;
  notes: string;
}

export const primaryNav: NavItem[] = [
  { label: 'Főoldal', path: '/' },
  { label: 'Árak', path: '/arak' },
  { label: 'Oktatók', path: '/oktatok' },
  { label: 'Járművek', path: '/jarmuvek' },
  { label: 'Kategóriák', path: '/kategoriak' },
  { label: 'Tájékoztató', path: '/tajekoztato' },
  { label: 'Első lépés', path: '/elso-lepes' },
  { label: 'Kapcsolat', path: '/kapcsolat' },
];

export const infoNav: NavItem[] = [
  { label: 'AM', path: '/am-kategoria' },
  { label: 'A1 B-vel', path: '/a1-kategoria-b-vel' },
  { label: 'A1', path: '/a1-kategoria' },
  { label: 'A2', path: '/a2-kategoria' },
  { label: 'A', path: '/a-kategoria' },
  { label: 'KRESZ', path: '/kresz' },
];

export const prices: PriceCard[] = [
  {
    title: 'A1 induló csomag',
    subtitle: 'Könnyű motor, kezdőbarát tempó',
    price: '189 000 Ft',
    items: [
      'Elméleti felkészítés',
      'Rutin és forgalmi órák ütemezve',
      'Vizsgaszervezési támogatás',
    ],
  },
  {
    title: 'A2 teljes felkészítés',
    subtitle: 'Legnépszerűbb csomagunk',
    price: '229 000 Ft',
    items: [
      'Kategóriára szabott tanmenet',
      'Rugalmas oktatási időpontok',
      'Vizsga előtti célzott korrekció',
    ],
  },
  {
    title: 'A korlátlan',
    subtitle: 'Haladóknak és kategóriaváltóknak',
    price: '249 000 Ft',
    items: [
      'Nagy teljesítményű motoros tréning',
      'Valós forgalmi helyzetgyakorlatok',
      'Egyéni haladási terv',
    ],
  },
];

export const instructors: Instructor[] = [
  {
    name: 'Fekete Zoltán',
    role: 'Motoros szakoktató',
    bio: 'Nyugodt, következetes stílusban tanít. A cél, hogy minden tanuló stabil alapokkal és magabiztos forgalmi rutinnal menjen vizsgára.',
    specialties: [
      'Kezdők felzárkóztatása',
      'Vizsgadrukk kezelése',
      'Forgalmi döntési helyzetek gyakorlása',
    ],
  },
  {
    name: 'Nagy Gábor',
    role: 'Motoros szakoktató',
    bio: 'Strukturált óravezetéssel dolgozik. Rövid, célzott visszajelzésekkel segíti a gyors fejlődést.',
    specialties: [
      'Rutinpályás manőverek',
      'Biztonságos ívválasztás',
      'Defenzív közlekedési technikák',
    ],
  },
];

export const vehicles: Vehicle[] = [
  {
    category: 'A1',
    model: '125 cm3 oktatómotor',
    power: 'max. 11 kW',
    notes: 'Könnyen kezelhető, alacsony ülésmagasságú gép első lépésekhez.',
  },
  {
    category: 'A2',
    model: 'Középkategóriás naked motor',
    power: 'max. 35 kW',
    notes: 'Stabil és kiszámítható viselkedés, ideális forgalmi felkészüléshez.',
  },
  {
    category: 'A',
    model: 'Nagyobb túra- és roadster motor',
    power: 'korlátlan',
    notes: 'Erősebb gép, de oktatási környezetben biztonságosan vezethető.',
  },
];

export const schoolFacts = [
  'Budapest központi helyszín',
  'Rugalmas időpont-egyeztetés',
  'Kis csoportos, figyelmes oktatás',
  'Vizsgáig kísért, átlátható folyamat',
];

export const contactData = {
  school: 'Mocisuli Budapest',
  address: '2191 Bag, Sport u. 10. ',
  phone: '06706132636',
  email: 'fashionbemore@gmail.com',
};
