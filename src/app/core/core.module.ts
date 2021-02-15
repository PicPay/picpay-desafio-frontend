import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LANGUAGES, ptLang } from '@core/languages/languages.lang';
import { ApiService } from '@core/services/api/api.service';
import { FormControlValidatorService } from '@core/services/form-control-validator/form-control-validator.service';
import { ThemeService } from '@core/services/theme/theme.service';
import { TranslateSwicherService } from '@core/services/translate-switcher/translate-switcher.service';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function httpTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [CommonModule, TranslateModule],
  providers: [
    HttpClientModule,
    ApiService,
    ThemeService,
    TranslateSwicherService,
    FormControlValidatorService,
  ],
})
export class CoreModule {
  constructor(translateService: TranslateService) {
    translateService.addLangs(LANGUAGES);
    translateService.setDefaultLang(ptLang);
    translateService.use(ptLang);
  }
}
