import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptModalComponent } from './receipt-modal.component';

describe('ReceiptModalComponent', () => {
  let component: ReceiptModalComponent;
  let fixture: ComponentFixture<ReceiptModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptModalComponent ],
      providers: [
        { provide: 'MODAL_DATA', useValue: true }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a success message on success', () => {
    const content = fixture.nativeElement.querySelector('.content')
    expect(content.textContent.trim()).toBe('O pagamento foi concluido com sucesso.');
  });

  it('should render a fail message when fails', () => {
    component.success = false;
    fixture.detectChanges();

    const content = fixture.nativeElement.querySelector('.content')
    expect(content.textContent.trim()).toBe('O pagamento não foi concluido com sucesso.');
  });
});
