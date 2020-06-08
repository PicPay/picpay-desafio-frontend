import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

// Components
import { AppComponent } from "./app.component";

// Imports
import { CoreModule } from "./core/core.module";
import { UserModule } from "./modules/user/user.module";

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
