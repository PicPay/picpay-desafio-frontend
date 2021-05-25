import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import localePt from "@angular/common/locales/pt";
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

registerLocaleData(localePt, "pt");
@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
		RouterModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt",
    },
  ],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	
})
export class AppModule {}
