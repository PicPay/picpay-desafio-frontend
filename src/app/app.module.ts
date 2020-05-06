import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Provider } from "@angular/core";

import { AppComponent } from "./app.component";
import { ModalComponent } from "./shared/modal/modal/modal.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { HttpRequestInterceptor } from "./interceptors/http-interceptor/http-request.service";
import { UserListComponent } from "./modules/user/user-list/user-list.component";
import { UserCardComponent } from "./modules/user/user-card/user-card.component";
import { UserListModule } from "./modules/user/user-list/user-list.module";

const providers: Provider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true,
  },
];

@NgModule({
  declarations: [AppComponent, ModalComponent],
  imports: [BrowserModule, HttpClientModule, UserListModule],
  providers,
  bootstrap: [AppComponent],
})
export class AppModule {}
