import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrl: './instructors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstructorsComponent {
  readonly intro = [
    'Kedves Motorosok és Motorosok Tanulói!',
    'Engedjétek meg, hogy bemutatkozzak: Fekete Zoltán vagyok, a motorozás iránti szenvedélyes oktatótok. Motorosokként mindannyian egy olyan különleges közösség részesei vagyunk, akik a szél szabadságát és az aszfalt izgalmas kihívásait kergetik. Az én feladatom és szenvedélyem az, hogy segítsek nektek elérni a motorozás legmagasabb szintjét, és ezen az úton minden tudásomat és tapasztalatomat megosztom veletek.',
    'A motorozásban való fejlődés és biztonság mindig is az én legfőbb prioritásom volt. Több évtizedes tapasztalatot és számtalan motorozásra szentelt órát tudhatok magam mögött, és büszke vagyok rá, hogy a tanítványaimnak is sikerült átadnom ezt a szenvedélyt és tudást.',
    'Az oktatásom során nem csak arra törekszem, hogy segítsek nektek megszerezni a motoros jogosítványt, hanem arra is, hogy valódi motorosokként érezzétek magatokat az utakon. Az alapoktól kezdve a haladó technikákig mindenre odafigyelek, hogy magabiztosan és biztonságosan motorozhassatok bárhol, bármikor.',
    'A legfontosabb, amit tudnotok kell rólam, az az, hogy szenvedélyesen hiszek a motorozás erejében, és büszke vagyok rá, hogy részese lehetek annak az útnak, ami a motorozás iránti szenvedélyetek megéléséhez vezet. Remélem, hogy hamarosan találkozunk az iskolánkban, és együtt motorozhatunk az új kihívások és élmények felé!',
  ];

  readonly highlights = [
    'Magas szintű motoros tapasztalat és szakértelem.',
    'Alapos oktatás a motorozás alapjaiból egészen a haladó technikákig.',
    'Szenvedély és elhivatottság a motorozás és a tanítás iránt.',
    'Személyre szabott oktatási módszerek az oktatványok igényeinek megfelelően.',
    'Biztonságos és felelősségteljes motorozásra való hangsúly.',
  ];
}
