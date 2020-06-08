import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from "./header/header.component";
import { httpServices } from './http';

@NgModule({
  declarations: [HeaderComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule],
  exports: [HeaderComponent],
  providers: [...httpServices]
})
export class CoreModule {}
