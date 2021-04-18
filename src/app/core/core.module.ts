import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreComponent } from './core.component';
import { WrapperModule } from '../modules';

@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    BrowserModule,
    WrapperModule
  ],
  providers: [],
  bootstrap: [CoreComponent]
})
export class CoreModule { }
