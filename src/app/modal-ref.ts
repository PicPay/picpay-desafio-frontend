import { Subject } from 'rxjs';
import { OverlayRef } from '@angular/cdk/overlay';
import { TemplateRef, Type } from '@angular/core';

export interface OverlayCloseEvent<R> {
  data: R;
}

export class ModalRef<R = any, T = any> {
  afterClosed$ = new Subject<OverlayCloseEvent<R>>();

  constructor(
    public overlay: OverlayRef,
    public content: string | TemplateRef<any> | Type<any>,
    public modalTitle: string,
    public data: T,
  ) {}

  close(data?: R) {
    this._close(data);
  }

  private _close(data: R) {
    this.overlay.dispose();
    this.afterClosed$.next({
      data
    });
    this.afterClosed$.complete();
  }
}