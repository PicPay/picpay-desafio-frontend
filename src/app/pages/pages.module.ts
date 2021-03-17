import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersPageComponent } from "./users-page/users-page.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { PayDialogComponent } from "./pay-dialog/pay-dialog.component";
import { MatButtonModule, MatDialogModule } from "@angular/material";

@NgModule({
  declarations: [UsersPageComponent, PayDialogComponent],
  entryComponents: [PayDialogComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
  ],
})
export class PagesModule {}
