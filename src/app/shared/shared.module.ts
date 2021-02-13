import { NgModule } from '@angular/core';
import { ComponentsModule } from '@shared/components/components.module';
import { FormControlValidatorService } from '@shared/services/form-control-validator/form-control-validator.service';
import { TransactionService } from '@shared/services/transaction/transaction.service';
import { UserService } from '@shared/services/user/user.service';

@NgModule({
  exports: [
    ComponentsModule
  ],
  providers: [
    TransactionService,
    UserService,
    FormControlValidatorService
  ]
})
export class SharedModule {}
