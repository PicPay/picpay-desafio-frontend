import { HttpClientModule } from '@angular/common/http'
import { RemoteGetAllCards } from 'src/app/data/usecases'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [RemoteGetAllCards]
})
export class DataModule {}
