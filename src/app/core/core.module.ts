import { FormControlValidatorService } from '@core/services/form-control-validator/form-control-validator.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApiService } from '@core/services/api/api.service';
import { ThemeService } from './services/theme/theme.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    HttpClientModule,
    ApiService,
    ThemeService,
    FormControlValidatorService,
  ],
})
export class CoreModule {}
