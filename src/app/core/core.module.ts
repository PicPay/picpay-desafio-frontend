import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApiService } from '@core/services/api/api.service';
import { ThemeService } from './services/theme/theme.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [HttpClientModule, ApiService, ThemeService],
})
export class CoreModule {}
