import { enableProdMode, StaticProvider } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const providers: StaticProvider[] = [
  { provide: 'USERS_URL', useValue: 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce' },
  { provide: 'PAYMENT_URL', useValue: 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989' }
]

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));
