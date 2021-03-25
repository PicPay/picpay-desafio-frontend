import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class CaseInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      body: this.changePropertyName(
        req.body,
        key => key.replace(/(?<!^)([A-Z])/g, $1 => `_${$1.toLowerCase()}`)
      )
    });
    return next.handle(req);
  }

  changePropertyName(obj: any, modifier: (value: string) => string): any {
    if (typeof obj === 'object' && !Array.isArray(obj)) {
      const n = {};
      for (const key in obj) {
        n[modifier(key)] = this.changePropertyName(obj[key], modifier);
      }
      return n;
    }
    
    if (Array.isArray(obj)) return obj.map(item => this.changePropertyName(item, modifier));
    
    return obj;
  }
}