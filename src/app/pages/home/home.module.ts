import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CreditCardData } from 'src/app/@core/data/credit-card.data';
import { TransactionService } from 'src/app/@core/services/http/transaction.service';
import { UserService } from 'src/app/@core/services/http/user.service';
import { UserInfoModule } from 'src/app/@shared/components/user-info/user-info.module';

import { ButtonModule } from './../../@shared/components/button/button.module';
import { CardModule } from './../../@shared/components/card/card.module';
import { MessageModule } from './../../@shared/components/message/message.module';
import { ModalModule } from './../../@shared/components/modal/modal.module';
import { TransactionComponent } from './components/transaction/transaction.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeResolve } from './services/resolvers/home.resolve';
import { NgxCurrencyModule } from "ngx-currency";
import { NgxSpinnerModule } from "ngx-spinner";
import { CreditCardPipe } from 'src/app/@shared/pipes/credit-card/credit-card.pipe';
import { CreditCardService } from 'src/app/@core/mock/credit-card/credit-card.service';


@NgModule({
  declarations: [
    HomeComponent,
    UserListComponent,
    TransactionComponent,
    CreditCardPipe,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule,
    UserInfoModule,
    ButtonModule,
    ModalModule,
    ReactiveFormsModule,
		MessageModule,
		NgxCurrencyModule,
		NgxSpinnerModule
  ],
  providers: [
    { provide: CreditCardData, useClass: CreditCardService },
    UserService,
    HomeResolve,
    TransactionService,
  ],
})
export class HomeModule {}
