import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ComponentsModule } from './../components.module';
import { TranslateSwitcherComponent } from './translate-switcher.component';
import { LANGUAGES } from '@core/languages/languages.lang';

describe('TranslateSwitcherComponent', () => {
  let component: TranslateSwitcherComponent;
  let fixture: ComponentFixture<TranslateSwitcherComponent>;
  let debugElement: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ComponentsModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(TranslateSwitcherComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list languages', () => {
    const spanList = debugElement.queryAll(By.css('span'));

    expect(spanList.length).toEqual(LANGUAGES.length);

    spanList.forEach((span, index) => {
      expect(span.nativeElement.textContent).toContain(LANGUAGES[index]);
    });
  });
});
