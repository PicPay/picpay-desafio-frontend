import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardVisualizationComponent } from './credit-card-visualization.component';

describe('CreditCardVisualizationComponent', () => {
  let component: CreditCardVisualizationComponent;
  let fixture: ComponentFixture<CreditCardVisualizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardVisualizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
