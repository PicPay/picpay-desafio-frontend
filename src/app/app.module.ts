import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { PagesModule } from "./pages/pages.module";
import { HttpClient } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PagesModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
