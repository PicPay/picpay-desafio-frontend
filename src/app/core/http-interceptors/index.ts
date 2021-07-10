import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppHttpInterceptor } from './app-http-interceptor';

export const appHttpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true },
];