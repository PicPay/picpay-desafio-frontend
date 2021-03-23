import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit {
  @ViewChild('containerRef', { read: ViewContainerRef, static: true }) container: ViewContainerRef;

  constructor(
    private _modalService: ModalService,
    private _componentFactoryResolver:ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this._modalService.getActiveModal$().subscribe(
      modal => {
        let resolver = this._componentFactoryResolver.resolveComponentFactory(modal);
        this.container.createComponent(resolver);
      }
    )
  }
}
