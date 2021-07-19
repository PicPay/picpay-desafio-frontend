import { NgModule } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select'; 
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  exports: [
    MatDialogModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
})
export class MaterialModule { }
