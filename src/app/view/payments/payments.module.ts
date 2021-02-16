import { ScrollDispatchModule, ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreditCardVisualizationComponent } from './components/credit-card-visualization/credit-card-visualization.component';
import { PaymentConfirmationComponent } from './components/payment-modal/components/payment-confirmation/payment-confirmation.component';
import { PaymentErrorComponent } from './components/payment-modal/components/payment-error/payment-error.component';
import { PaymentSelectAmoutComponent } from './components/payment-modal/components/payment-select-amout/payment-select-amout.component';
import { PaymentSuccessComponent } from './components/payment-modal/components/payment-success/payment-success.component';
import { PaymentModalComponent } from './components/payment-modal/payment-modal.component';
import { PaymentsComponent } from './page/payments/payments.component';
import { PaymentsRoutingModule } from './payments-routing.module';
import { SkeletonDirective } from './skeleton.directive';

const modules = [
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
  MatProgressSpinnerModule,
];

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
  imports: [...modules],
  entryComponents: [PaymentModalComponent, CreditCardVisualizationComponent],
})
export class PaymentsModule {}
