import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { TranslateService } from '@ngx-translate/core';
import translationHu from '../../public/i18n/hu.json'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('zozo-suli');

  constructor(private translate: TranslateService) {
    translate.setTranslation('hu', translationHu);
}
}
