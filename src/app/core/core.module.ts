import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApiService } from '@core/services/api/api.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [HttpClientModule, ApiService],
})
export class CoreModule {}
