import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';


import { ApiService } from '@service/api.service';
import { UserService } from '@service/user.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarComponent } from './component/avatar/avatar.component';
import { FilterPipe } from './pipe/filter.pipe';
import { ToolbarComponent } from './component/toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AvatarComponent,
    ToolbarComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSelectModule,
    MatToolbarModule,
    MatInputModule,
    MatGridListModule
  ],
  providers: [
    ApiService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
