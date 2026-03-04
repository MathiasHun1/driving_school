import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-category-a1',
  imports: [CommonModule],
  templateUrl: './category-a1.component.html',
  styleUrl: './category-a1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryA1Component {
  readonly title = '"A1" kategória';
  readonly intro = 'Nemzetközi kategória. Olyan kétkerekű motorkerékpár, amelyet 125 cm3-t meg nem haladó lökettérfogatú és legfeljebb 11 kW teljesítményű motor hajt.';
  readonly extraTitle = 'Még milyen jármű vezetésére jogosít?';
  readonly extraText = 'Az "A1" alkategóriára érvényesített vezetői engedéllyel vezethető még - az orvosi érvényesség lejártát követően is, de legfeljebb az engedély kiállítását követő tíz évig - a segédmotoros kerékpár, a lassú jármű és pótkocsija, a kerti traktor és az állati erővel vont jármű. Az 1998. január 01. előtt kiadott "A1" alkategóriával a 125 cm3 hengerűrtartalmat meghaladó, de a 150 cm3 hengerűrtartalmat meg nem haladó hajtómotorral ellátott motorkerékpárt is lehet vezetni.';
  readonly noteTitle = 'Kezdő vezetői engedély ("A1")';
  readonly noteText = 'Az elsőként szerzett nemzetközi kategóriás vezetői engedély a vizsga napjától számított két évig kezdő vezetői engedélynek minősül. A kezdő vezetői engedéllyel motorkerékpáron utas nem szállítható.';

  readonly admission = [
    'a 16. éves életkort betöltötte, vagy annál legfeljebb 6 hónappal fiatalabb',
    'írásbeli nyilatkozata alapján a 35/2000. (XI. 30.) BM rendeletben meghatározott közlekedésbiztonsági feltételeknek megfelel;',
    'nyilatkozik, hogy legalább 8 osztályos bizonyítvánnyal rendelkezik.',
  ];

  readonly fees = [
    'Közlekedési alapismeretek számítógépes vizsga: 4.600 Ft',
    'Járműkezelési gyakorlati vizsga: 4.700 Ft',
    'Forgalmi gyakorlati vizsga: 11.000 Ft',
  ];

  readonly examTheory = [
    'a tanfolyam elméleti részét igazoltan elvégezte;',
    '16 éves, vagy annál legfeljebb három hónappal fiatalabb, és',
    'a vizsga időpontjában is megfelel a tanfolyamra való felvételre előírt többi feltételnek.',
  ];

  readonly examPractice = [
    'az összes elméleti vizsgatárgyból sikeresen vizsgázott;',
    'a kötelező gyakorlati órákat igazoltan teljesítette;',
    '16 éves, vagy annál legfeljebb három hónappal fiatalabb, és',
    'a vizsga időpontjában is megfelel a tanfolyamra való felvételre előírt többi feltételnek.',
  ];

  readonly examTraffic = [
    'sikeres járműkezelési vizsgát tett;',
    'a kötelező gyakorlati órákat igazoltan teljesítette;',
    '16 éves, és',
    'a vizsga időpontjában is megfelel a tanfolyamra való felvételre előírt többi feltételnek.',
  ];
}
