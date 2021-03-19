import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserListItemComponent } from "./user-list-item/user-list-item.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [UserListItemComponent],
  imports: [CommonModule, SharedModule],
})
export class UserModule {}
