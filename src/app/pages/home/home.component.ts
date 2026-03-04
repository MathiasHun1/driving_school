import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly offerings = [
    {
      title: 'Kiemelkedő oktatóink',
      text: 'Tapasztalt, szakértő instruktőreink segítenek Önnek elsajátítani a motorozás művészetét. Képzett és elhivatott oktatóink olyan tudással és készségekkel rendelkeznek, amelyek szükségesek a biztonságos és örömteli motorozáshoz.',
    },
    {
      title: 'Képzések minden szinten',
      text: 'Legyen Ön kezdő vagy haladó motoros, nálunk megtalálja a megfelelő tanfolyamot. A kezdetektől az új kihívásokig segítünk növelni motoros képességeit.',
    },
    {
      title: 'Biztonság és felelősség',
      text: 'A biztonság mindig az elsődleges szempont, és a motorozás iránti szenvedélyt ötvözzük a felelős és tudatos vezetés oktatásával.',
    },
    {
      title: 'Közösség és élmények',
      text: 'A MociSuli nemcsak egy tanulóhely, hanem egy motoros közösség is, ahol új barátokat talál és megoszthatja motorozási élményeit.',
    },
    {
      title: 'Személyre szabott megközelítés',
      text: 'Minden tanulót egyedi igényekre szabottan kezelünk, így az oktatás teljesen az Ön igényeire épül.',
    },
  ];
}
