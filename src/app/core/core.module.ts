import { ApiHttpService } from './services/api-http.service'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [ApiHttpService]
})
export class CoreModule {}
