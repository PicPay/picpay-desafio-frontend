import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserListComponent } from "./user-list.component";
import { UserCardModule } from "../user-card/user-card.module";
import { UserCardComponent } from "../user-card/user-card.component";

@NgModule({
  declarations: [UserListComponent, UserCardComponent],
  exports: [UserListComponent],
  imports: [CommonModule],
})
export class UserListModule {}
