import { Directive, HostBinding, ElementRef, Renderer2, HostListener, Input, OnInit } from '@angular/core';
import { MatRipple } from '@angular/material';

@Directive({
  selector: '[appButtonPrimary]',
  providers: [MatRipple]
})
export class ButtonPrimaryDirective implements OnInit {

  @HostBinding('class') class = 'app-btn app-btn-primary';

  @Input('disabled')
  @HostBinding('disabled')
  get disabled(): boolean {
    return this.DISABLED;
  }
  set disabled(disabled: boolean) {
    this.DISABLED = disabled;

    if (disabled) {
      this.addClass('-disabled');
    } else {
      this.removeClass('-disabled');
    }
  }
  private DISABLED: boolean;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private ripple: MatRipple
  ) { }

  ngOnInit(): void {
    this.setup();
  }

  @HostListener('mousedown', [ '$event' ]) onmousedown(event) {
    if (!this.disabled) {
      this.ripple.launch(event.x, event.y);
    }
  }

  private setup() {
    const el = this.element.nativeElement;
    const label = this.renderer.createElement('span');

    label.innerText = el.innerText;

    el.innerText = '';

    this.renderer.appendChild(el, label);

    label.classList.add('app-btn-content');
  }

  private addClass(value: string) {
    const el = this.element.nativeElement;

    this.renderer.addClass(el, 'app' + value);
  }

  private removeClass(value: string) {
    const el = this.element.nativeElement;

    this.renderer.removeClass(el, 'app' + value);
  }

}
