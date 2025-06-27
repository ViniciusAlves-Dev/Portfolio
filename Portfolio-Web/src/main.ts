import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch, HttpClient } from '@angular/common/http';

// Importações do ngx-translate
// Certifique-se de importar 'TranslateModule' aqui
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './app/app.routes';

export function HttpLoarderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');  
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),

    provideHttpClient(withFetch()),

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoarderFactory, 
        deps: [HttpClient]
      }
    }).providers!]
}).catch(err => console.error(err));