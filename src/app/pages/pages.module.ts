import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersPageComponent } from "./users-page/users-page.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { TransactionsDialogComponent } from "./dialogs/transactions-dialog/transactions-dialog.component";
import { TransactionsConfirmationDialogComponent } from "./dialogs/transactions-confirmation-dialog/transactions-confirmation-dialog.component";
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
} from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    UsersPageComponent,
    TransactionsDialogComponent,
    TransactionsConfirmationDialogComponent,
  ],
  entryComponents: [
    TransactionsDialogComponent,
    TransactionsConfirmationDialogComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class PagesModule {}
