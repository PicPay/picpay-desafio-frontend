import { HomeComponent } from './presentation/home/home.component'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
