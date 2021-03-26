import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { UserModule } from "./modules/user/user.module";
import { ModalModule } from "./modules/modal/modal.module";
import { Helper } from "./utils/helpers";

@NgModule({
  declarations: [AppComponent],
  imports: [UserModule, ModalModule, BrowserModule, HttpClientModule],
  providers: [Helper],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
