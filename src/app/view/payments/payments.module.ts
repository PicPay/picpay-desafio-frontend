import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule, ScrollDispatchModule } from '@angular/cdk/scrolling';
import { PaymentModalComponent } from './components/payment-modal/payment-modal.component';
import { PaymentsComponent } from './page/payments/payments.component';
import { PaymentsRoutingModule } from './payments-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PaymentSelectAmoutComponent } from './components/payment-modal/components/payment-select-amout/payment-select-amout.component';
import { PaymentConfirmationComponent } from './components/payment-modal/components/payment-confirmation/payment-confirmation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreditCardVisualizationComponent } from './components/credit-card-visualization/credit-card-visualization.component';
import { PaymentErrorComponent } from './components/payment-modal/components/payment-error/payment-error.component';
import { PaymentSuccessComponent } from './components/payment-modal/components/payment-success/payment-success.component';
import { SkeletonDirective } from './skeleton.directive';

@NgModule({
  declarations: [
    PaymentsComponent,
    PaymentModalComponent,
    PaymentSelectAmoutComponent,
    PaymentConfirmationComponent,
    CreditCardVisualizationComponent,
    PaymentErrorComponent,
    PaymentSuccessComponent,
    SkeletonDirective,
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    ScrollingModule,
    ScrollDispatchModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatTooltipModule,
  ],
  entryComponents: [PaymentModalComponent, CreditCardVisualizationComponent],
})
export class PaymentsModule {}
