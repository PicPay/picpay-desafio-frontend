import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserService } from "./services/user.service";
import { UserListComponent } from "./components/list/user-list.component";
import { ModalModule } from "../modal/modal.module";
import { UserComponent } from "./components/user/user.component";

@NgModule({
  declarations: [UserListComponent, UserComponent],
  imports: [CommonModule, ModalModule],
  exports: [UserListComponent],
  providers: [UserService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class UserModule {}
