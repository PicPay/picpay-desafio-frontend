import {
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef,
  ComponentRef,
} from '@angular/core';
import { PayingScreenComponent } from './paying-screen.component';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

/** @dynamic */
@Injectable()
export class PayingScreenService {
  private isOpen = false;
  private currentComponentRef: ComponentRef<PayingScreenComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  open(): void {
    /* istanbul ignore else */
    if (!this.isOpen) {
      this.isOpen = true;

      const componentRef = this.getElementRef();
      this.appendToContainer(componentRef);
      this.currentComponentRef = componentRef;
    }
  }

  close(): void {
    this.currentComponentRef.instance.isDone = true;
  }

  private getElementRef(): ComponentRef<PayingScreenComponent> {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(PayingScreenComponent)
      .create(this.injector);

    componentRef.instance.done.subscribe((isDone: boolean) => {
      if (isDone) {
        this.destroyComponent();
      }
    });

    return componentRef;
  }

  private appendToContainer(componentRef): void {
    this.appRef.attachView(componentRef.hostView);

    const payingScreen = (componentRef.hostView as EmbeddedViewRef<PayingScreenComponent>)
      .rootNodes[0] as HTMLElement;

    this.document.getElementsByTagName('body')[0].appendChild(payingScreen);
    this.document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  }

  private destroyComponent(): void {
    this.isOpen = false;
    this.currentComponentRef.destroy();
    this.document.getElementsByTagName('body')[0].style.overflow = 'auto';
  }
}
