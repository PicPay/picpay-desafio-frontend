import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable()
export class TranslateSwicherService {
  constructor(public translate: TranslateService) {}

  switchLang(lang: string): Observable<any> {
    return this.translate.use(lang);
  }
}
