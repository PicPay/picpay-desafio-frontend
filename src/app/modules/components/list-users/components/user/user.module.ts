import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule } from '@angular/material/dialog';
import { PayComponent } from '../.././../modal';

@NgModule({
  declarations: [
    UserComponent,
    PayComponent,
  ], 
  exports: [
    UserComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [PayComponent],

})

export class UserModule { }