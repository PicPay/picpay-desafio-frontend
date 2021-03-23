import { Component, ComponentFactoryResolver, ComponentRef, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalRef } from 'src/app/models/modal-ref';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit {
  @ViewChild('containerRef', { read: ViewContainerRef, static: true }) container: ViewContainerRef;
  isActive: boolean;
  componentRef: ComponentRef<any>;

  constructor(
    private _modalService: ModalService,
    private _componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    let injector = Injector.create({providers: [
      { provide: ModalRef, useValue: { hide: this.hideFactory() }}
    ]})
    this._modalService.getActiveModal$().subscribe(
      modal => {
        this.container.clear();
        if (!modal) {
          this.isActive = false;
          return;
        }
        this.isActive = true;
        let resolver = this._componentFactoryResolver.resolveComponentFactory(modal);
        this.componentRef = this.container.createComponent(resolver, null, injector);
      }
    )
  }

  hideFactory() {
    return () => this.clear();
  }

  clear() {
    this.isActive = false;
    this.container.clear();
  }
}
