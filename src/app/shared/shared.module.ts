import { CoreModule } from '@core/core.module';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '@shared/components/components.module';
import { TransactionService } from '@shared/services/transaction/transaction.service';
import { UserService } from '@shared/services/user/user.service';

@NgModule({
  imports: [CoreModule],
  exports: [ComponentsModule],
  providers: [TransactionService, UserService],
})
export class SharedModule {}
