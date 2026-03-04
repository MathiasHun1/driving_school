import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-category-am',
  imports: [CommonModule],
  templateUrl: './category-am.component.html',
  styleUrl: './category-am.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryAmComponent {
  readonly title = '"AM" kategória';
  readonly intro = 'Nemzetközi kategória. Olyan két-, három- vagy négykerekű jármű, amelyet 50 cm3-t meg nem haladó lökettérfogatú belső égésű motor vagy legfeljebb 4 kW teljesítményű egyéb motor hajt, tervezési végsebessége a 45 km/óránál nem nagyobb és saját tömege legfeljebb 350 kg.';
  readonly extraTitle = 'Még milyen jármű vezetésére jogosít?';
  readonly extraText = 'Az "AM" nemzeti kategóriára érvényesített vezetői engedély legfeljebb az engedély kiállítását követő tíz évig (a vezetői engedély érvényességének lejártáig) jogosít állati erővel vont jármű hajtására, és a 16. életév betöltése után kerti traktor vezetésére is. 16 év betöltéséig csak belföldön történő járművezetésre jogosít.';
  readonly noteTitle = '';
  readonly noteText = '';

  readonly admission = [
    'a 14. éves életkort betöltötte, vagy annál legfeljebb 6 hónappal fiatalabb;',
    'írásbeli nyilatkozata alapján a 35/2000. (XI. 30.) BM rendeletben meghatározott közlekedésbiztonsági feltételeknek megfelel;',
    'írni, olvasni tud.',
  ];

  readonly fees = [
    'Közlekedési alapismeretek számítógépes vizsga: 4.600 Ft',
    'Járműkezelési gyakorlati vizsga: 3.600 Ft',
    'Forgalmi gyakorlati vizsga: 3.600 Ft',
  ];

  readonly examTheory = [
    'a tanfolyam elméleti részét igazoltan elvégezte;',
    '14 éves, vagy annál legfeljebb három hónappal fiatalabb, és',
    'a vizsga időpontjában is megfelel a tanfolyamra való felvételre előírt többi feltételnek.',
  ];

  readonly examPractice = [
    'az összes elméleti vizsgatárgyból sikeresen vizsgázott;',
    'a kötelező gyakorlati órákat igazoltan teljesítette;',
    '14 éves, vagy annál legfeljebb három hónappal fiatalabb, és',
    'a vizsga időpontjában is megfelel a tanfolyamra való felvételre előírt többi feltételnek.',
  ];

  readonly examTraffic = [
    'sikeres járműkezelési vizsgát tett;',
    'a kötelező gyakorlati órákat igazoltan teljesítette;',
    '14 éves, és',
    'a vizsga időpontjában is megfelel a tanfolyamra való felvételre előírt többi feltételnek.',
  ];
}
