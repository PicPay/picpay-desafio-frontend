import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ErrorDisplayComponent } from './error-display.component';

describe('ErrorDisplayComponent', () => {
  let component: ErrorDisplayComponent;
  let fixture: ComponentFixture<ErrorDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ ErrorDisplayComponent ],
      providers: [ NgForm ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve exibir mensagem quando #submit:true e #message != undefined', () => {
    let spySubmit = spyOnProperty(component, 'submitted', 'get')
    let spyMessage = spyOnProperty(component, 'message', 'get')
    spySubmit.and.returnValue(false);
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('p.help'))).toBeFalsy();

    spySubmit.and.returnValue(true);
    spyMessage.and.returnValue('Algume erro');
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('p.help'))).toBeTruthy();
  })

  it('Deve exibir uma mensagem de erro coerente', () => {
    component.control = new FormControl();
    component.control.setErrors({required: true});
    expect(component.message).toBe('Campo é obrigatório!')

    component.control.setErrors({email: true});
    expect(component.message).toBe('Campo deve ser um e-mail!')

    component.control.setErrors({blabalbalab: true});
    expect(component.message).toBe('Campo inválido.')

    component.control.setErrors(null);
    expect(component.message).toBeFalsy();
  })
});
