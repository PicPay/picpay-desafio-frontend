import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardUserComponent } from 'src/app/components/card-user/card-user.component';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    HomeComponent,
    CardUserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({}),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
