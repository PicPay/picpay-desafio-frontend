import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class ThemeService {
  public alternateClass = 'theme-alternate';
  public body = this.dom.getElementsByTagName('body').item(0);
  constructor(@Inject(DOCUMENT) private dom: Document) {}

  changeTheme(): void {
    this.body.className =
      !this.body.className.includes(this.alternateClass) && this.alternateClass;
  }

  isAlternateTheme(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      observer.next(this.body.className.includes(this.alternateClass));
    });
  }
}
