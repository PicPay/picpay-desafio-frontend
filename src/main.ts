import { enableProdMode, StaticProvider } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const providers: StaticProvider[] = [
  { provide: 'USERS_URL', useValue: 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce' }
]

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));
