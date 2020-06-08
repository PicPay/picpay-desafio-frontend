import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";

import { UserComponent } from "./user.component";

import { UserListComponent } from "./user-list/user-list.component";
import { UserItemComponent } from "./user-item/user-item.component";
import { UserStatusComponent } from "./user-status/user-status.component";
import { UserFormComponent } from "./user-form/user-form.component";

const declarations = [
  UserComponent,
  UserListComponent,
  UserItemComponent,
  UserStatusComponent,
  UserFormComponent,
];

@NgModule({
  declarations,
  imports: [SharedModule],
  providers: [],
  bootstrap: [...declarations],
})
export class UserModule {}
