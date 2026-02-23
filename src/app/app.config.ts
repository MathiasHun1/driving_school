import { ApplicationConfig, importProvidersFrom, makeStateKey, provideBrowserGlobalErrorListeners, TransferState } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideTranslateService, provideTranslateLoader, TranslateLoader, TranslateModule, TranslationObject} from "@ngx-translate/core";
import {provideTranslateHttpLoader, TranslateHttpLoader} from "@ngx-translate/http-loader";
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import * as hu from '../../public/i18n/hu.json';



export class CustomTranslateLoader implements TranslateLoader {
  private readonly translationMap: Record<string, any> = {
    'hu': (hu as any).default || hu, // Handles different JSON import styles
  };

  constructor(
    private http: HttpClient, 
    private prefix: string = './assets/i18n/', 
    private suffix: string = '.json'
  ) {}

  getTranslation(lang: string): Observable<any> {
    const localTranslation = this.translationMap[lang];

    if (localTranslation) {
      return of(localTranslation);
    }

    // Since we aren't extending HttpLoader, we manually do the GET call here
    return this.http.get(`${this.prefix}${lang}${this.suffix}`);
  }
}

function customLoaderFactory(http: HttpClient) {
  return new CustomTranslateLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideClientHydration(withEventReplay()), 
    provideHttpClient(
    withFetch(),
    ),
    importProvidersFrom([TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: customLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'hu',
      useDefaultLang: true
    })]),
  ]
};
