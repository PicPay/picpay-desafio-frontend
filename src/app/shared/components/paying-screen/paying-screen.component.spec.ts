import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { PayingScreenComponent } from './paying-screen.component';

describe('PayingScreenComponent', () => {
  let component: PayingScreenComponent;
  let fixture: ComponentFixture<PayingScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PayingScreenComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
