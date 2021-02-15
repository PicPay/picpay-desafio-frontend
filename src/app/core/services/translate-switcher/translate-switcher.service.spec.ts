import { TranslateService } from '@ngx-translate/core';
import { TestBed } from '@angular/core/testing';
import { CoreModule } from '@core/core.module';
import { TranslateSwicherService } from './translate-switcher.service';
import { enLang, ptLang } from '@core/languages/languages.lang';

describe('TranslateSwitcherService', () => {
  let translateSwitcher: TranslateSwicherService;
  let translateService: TranslateService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      providers: [TranslateService],
    });

    translateSwitcher = TestBed.get(TranslateSwicherService);
    translateService = TestBed.get(TranslateService);
  });

  it('should switch translate', () => {
    expect(translateService.currentLang).toBe(ptLang);

    translateSwitcher.switchLang(enLang).subscribe(() => {
      expect(translateService.currentLang).toBe(enLang);
    });
  });
});
