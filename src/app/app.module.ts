import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './modules/home/home.module';
import { AppRoutingModule } from './app.routing';
import { appHttpInterceptorProviders } from './core/http-interceptors';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    SharedModule,
    CoreModule,
    HomeModule,
  ],
  providers: [
    appHttpInterceptorProviders,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
