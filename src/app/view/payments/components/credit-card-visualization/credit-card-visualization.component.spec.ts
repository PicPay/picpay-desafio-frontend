import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { CreditCardVisualizationComponent } from './credit-card-visualization.component';


describe('CreditCardVisualizationComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [CreditCardVisualizationComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CreditCardVisualizationComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should match the snapshot', () => {
    const fixture = TestBed.createComponent(CreditCardVisualizationComponent);
    const el = fixture.debugElement.nativeElement.outerHTML;
    expect(el).toMatchSnapshot();
  });
});
