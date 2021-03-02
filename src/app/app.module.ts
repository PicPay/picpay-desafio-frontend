import { HttpClientModule } from '@angular/common/http'
import { PresentationModule } from './presentation/presentation.module'
import { CoreModule } from './core/core.module'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule, LOCALE_ID } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { DataModule } from './data/data.module'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    DataModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    PresentationModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
