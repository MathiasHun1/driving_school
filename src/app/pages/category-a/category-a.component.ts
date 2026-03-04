import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-category-a',
  imports: [CommonModule],
  templateUrl: './category-a.component.html',
  styleUrl: './category-a.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryAComponent {
  readonly title = '"A" kategória';
  readonly intro = 'Nemzetközi kategória. Motorkerékpár korlátozás nélkül.';
  readonly extraTitle = 'Még milyen jármű vezetésére jogosít?';
  readonly extraText = 'Az "A" kategóriára érvényesített vezetői engedéllyel vezethető még az "A" korlátozott kategóriába és az "A1" és "A2" kategóriába tartozó motorkerékpár, valamint - az orvosi érvényesség lejártát követően is, de legfeljebb az engedély kiállítását követő tíz évig - a segédmotoros kerékpár, a lassú jármű és pótkocsija, a kerti traktor és az állati erővel vont jármű.';
  readonly noteTitle = 'Kezdő vezetői engedély';
  readonly noteText = 'Az elsőként szerzett nemzetközi kategóriás vezetői engedély a vizsga napjától számított két évig kezdő vezetői engedélynek minősül. A kezdő vezetői engedéllyel motorkerékpáron utas nem szállítható.';

  readonly admission = [
    'aki betöltötte 24. életévét vagy 6 hónappal fiatalabb',
    '20 éves vagy annál 6 hónappal fiatalabb és legalább 2 éve van "A2" motorkerékpár vezetési gyakorlata. Azonban 21 éves koráig csak olyan triciklit vezethet aminek a teljesítménye a 15 kW-ot nem haladja meg,',
    'írásbeli nyilatkozata alapján a 35/2000. (XI. 30.) BM rendeletben meghatározott közlekedésbiztonsági feltételeknek megfelel;',
    'egészségileg alkalmas;',
    'nyilatkozik, hogy legalább 8 osztályos bizonyítvánnyal rendelkezik.',
  ];

  readonly fees = [
    'Közlekedési alapismeretek számítógépes vizsga: 4.600 Ft (2 éven belül tett "A1", "A2" vagy "A" korlátozott KRESZ vizsgával mentesül a vizsga alól)',
    'Járműkezelési gyakorlati vizsga: 4.700 Ft',
    'Forgalmi gyakorlati vizsga: 11.000 Ft',
  ];

  readonly examTheory = [
    'a tanfolyam elméleti részét igazoltan elvégezte;',
    'a vizsga időpontjában is megfelel a tanfolyamra való felvételre előírt többi feltételnek.',
  ];

  readonly examPractice = [
    'az összes elméleti vizsgatárgyból sikeresen vizsgázott vagy 2 éven belül szerzett "A1" alkategóriás vagy "A" korlátozott kategóriás vezetői engedéllyel rendelkezik;',
    'a kötelező gyakorlati órákat igazoltan teljesítette;',
    'a vizsga időpontjában is megfelel a tanfolyamra való felvételre előírt többi feltételnek.',
  ];

  readonly examTraffic = [
    'sikeres járműkezelési vizsgát tett;',
    'a kötelező gyakorlati órákat igazoltan teljesítette;',
    'a vizsga időpontjában is megfelel a tanfolyamra való felvételre előírt többi feltételnek.',
  ];
}
