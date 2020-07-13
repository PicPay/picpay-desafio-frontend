import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PayMessageComponent } from './pay-message.component';

describe('PayMessageComponent', () => {
  let component: PayMessageComponent;
  let fixture: ComponentFixture<PayMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayMessageComponent);
    component = fixture.componentInstance;
    component.message = "Mensagem de sucesso";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the same message', () => {
    fixture.detectChanges();
    expect(component.message).toEqual('Mensagem de sucesso');
  })

  it('the same message in html', () => {
    const el = fixture.debugElement.nativeElement
    console.log(el.nativeElement)
    expect(el.querySelector('.text-message').textContent).toContain('Mensagem de sucesso');
  })
});
