import { ButtonPrimaryDirective } from './button-primary.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <button appButtonPrimary>Button test</button>
    <button appButtonPrimary disabled="true">Disabled true</button>
    <button appButtonPrimary [disabled]="false">Disabled false</button>
  `
})
class TestButtonPrimarytComponent {
}

describe('ButtonPrimaryDirective', () => {
  let component: TestButtonPrimarytComponent;
  let fixture: ComponentFixture<TestButtonPrimarytComponent>;
  let buttonEl: DebugElement;
  let buttonElDisabled: DebugElement;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ButtonPrimaryDirective,
        TestButtonPrimarytComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestButtonPrimarytComponent);
    component = fixture.componentInstance;
    buttonEl = fixture.debugElement.query(By.css('button[appButtonPrimary]'));
    buttonElDisabled = fixture.debugElement.query(By.css('button[appButtonPrimary]:disabled'));
    element = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(buttonEl).toBeTruthy();
    expect(buttonElDisabled).toBeTruthy();
  });

  it('should click button', () => {
    buttonEl.triggerEventHandler('mousedown', {});
    expect(buttonEl.nativeElement.disabled).toBe(false);

    fixture.detectChanges();

    buttonElDisabled.triggerEventHandler('mousedown', {});
    expect(buttonElDisabled.nativeElement.disabled).toBe(true);

    fixture.detectChanges();
  });
});
