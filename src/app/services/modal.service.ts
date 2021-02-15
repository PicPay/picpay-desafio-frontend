import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Injectable, Injector, TemplateRef, Type } from '@angular/core';

import { ModalRef } from '../modal-ref';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private overlay: Overlay, private injector: Injector
  ) { }

  open<R = any, T = any>(
    content: string | TemplateRef<any> | Type<any>,
    modalTitle: string,
    data: T,
  ): ModalRef<R> {

    const configs = new OverlayConfig({
      panelClass: ['is-active']
    });

    const overlayRef = this.overlay.create(configs);

    const modalRef = new ModalRef<R, T>(overlayRef, content, modalTitle, data);

    const injector = this.createInjector(modalRef, this.injector);
    overlayRef.attach(new ComponentPortal(ModalComponent, null, injector));

    return modalRef;
  }

  createInjector(ref: ModalRef, inj: Injector) {
    const injectorTokens = new WeakMap([[ModalRef, ref]]);
    return new PortalInjector(inj, injectorTokens);
  }
}