import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';

import { ServicesModule } from './services/services.module';
import { HttpClientModule } from '@angular/common/http';
import { Last4DigitsPipe } from './pipes/card.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from './components/modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
    Last4DigitsPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    OverlayModule,
    ModalModule,
    ServicesModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
