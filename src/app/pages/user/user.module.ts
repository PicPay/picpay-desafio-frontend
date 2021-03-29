import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { CardUserModule } from '@shared/components/card-user/card-user.module';
import { ButtonPayModule } from '@shared/components/button-pay/button-pay.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    CardUserModule,
    ButtonPayModule,
    NgxSkeletonLoaderModule,
  ],
})
export class UserModule {}
