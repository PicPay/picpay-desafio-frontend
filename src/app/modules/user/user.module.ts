import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserService } from "./services/user.service";
import { UserListComponent } from "./components/list/user-list.component";
import { ModalModule } from "../modal/modal.module";

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, ModalModule],
  exports: [UserListComponent],
  providers: [UserService],
})
export class UserModule {}
