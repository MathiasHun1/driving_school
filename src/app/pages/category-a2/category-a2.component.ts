import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-category-a2',
  imports: [CommonModule],
  templateUrl: './category-a2.component.html',
  styleUrl: './category-a2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryA2Component {
  readonly title = '"A2" kategória';
  readonly intro = 'Nemzetközi kategória. Legfeljebb 35 kW teljesítményű és 0,2 kW/kg teljesítmény/saját tömeg arányt meg nem haladó motorkerékpár.';
  readonly extraTitle = 'Még milyen jármű vezetésére jogosít?';
  readonly extraText = 'Az "A2" kategóriára érvényesített vezetői engedéllyel vezethető még az "A1" alkategóriába tartozó motorkerékpár, valamint - az orvosi érvényesség lejártát követően is, de legfeljebb az engedély kiállítását követő tíz évig - a segédmotoros kerékpár, a lassú jármű és pótkocsija, a kerti traktor és az állati erővel vont jármű.';
  readonly noteTitle = 'Kezdő vezetői engedély';
  readonly noteText = 'Az elsőként szerzett nemzetközi kategóriás vezetői engedély a vizsga napjától számított két évig kezdő vezetői engedélynek minősül. A kezdő vezetői engedéllyel motorkerékpáron utas nem szállítható. Motorkerékpár teljesítmény-korlátozással ("A" korlátozott kategória): "A" korlátozott kategória fogalma: "Az "A korlátozott" kategóriára érvényes vezetői engedélyt 2013. január 19-ét követően a közlekedési igazgatási hatóság kérelemre "A2" alkategóriára érvényes vezetői engedélyre cseréli." 5/2013. (I.16.) Korm. rendelete';

  readonly admission = [
    'betöltötte a 18. életévét, vagy annál legfeljebb 6 hónappal fiatalabb;',
    'egészségileg alkalmas;',
    'írásbeli nyilatkozata alapján a 35/2000. (XI. 30.) BM rendeletben meghatározott közlekedésbiztonsági feltételeknek megfelel;',
    'nyilatkozik, hogy legalább 8 osztályos bizonyítvánnyal rendelkezik.',
  ];

  readonly fees = [
    'Közlekedési alapismeretek számítógépes vizsga: 4.600 Ft (2 éven belül szerzett "A1" alkategóriás vagy "A" korlátozott kategóriás vezetői engedéllyel mentesül a vizsga alól)',
    'Járműkezelési gyakorlati vizsga: 4.700 Ft',
    'Forgalmi gyakorlati vizsga: 11.000 Ft',
  ];

  readonly examTheory = [
    'a tanfolyam elméleti részét igazoltan elvégezte;',
    '18 éves vagy annál 3 hónappal fiatalabb.',
    'a vizsga időpontjában is megfelel a tanfolyamra való felvételre előírt többi feltételnek.',
  ];

  readonly examPractice = [
    'az összes elméleti vizsgatárgyból sikeresen vizsgázott vagy 2 éven belül szerzett "A1"',
    'a kötelező gyakorlati órákat igazoltan teljesítette;',
    'a vizsga időpontjában is megfelel a tanfolyamra való felvételre előírt többi feltételnek.',
  ];

  readonly examTraffic = [
    'sikeres járműkezelési vizsgát tett;',
    'a kötelező gyakorlati órákat igazoltan teljesítette;',
    'a vizsga időpontjában is megfelel a tanfolyamra való felvételre előírt többi feltételnek.',
  ];
}
