import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersPageComponent } from "./users-page/users-page.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { PayDialogComponent } from "./dialogs/pay-dialog/pay-dialog.component";
import { TransactionConfirmationDialogComponent } from "./dialogs/transaction-confirmation-dialog/transaction-confirmation-dialog.component";
import { MatButtonModule, MatDialogModule } from "@angular/material";

@NgModule({
  declarations: [
    UsersPageComponent,
    PayDialogComponent,
    TransactionConfirmationDialogComponent,
  ],
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
