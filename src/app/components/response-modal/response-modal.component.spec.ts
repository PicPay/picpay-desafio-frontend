import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IResponseModal } from 'src/app/interfaces/response-modal.interface';

import { ResponseModalComponent } from './response-modal.component';

describe('ResponseModalComponent', () => {
  let component: ResponseModalComponent;
  let fixture: ComponentFixture<ResponseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseModalComponent);
    component = fixture.componentInstance;

    const mock_response: IResponseModal = {
        "success": true,
        "status": "Aprovada"
    }

    component.content = mock_response;
    
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    expect(fixture.nativeElement.querySelector('[data-test=title]').innerText).toEqual(component.TITLE);
  });

  it('should have a status', () => {
    expect(fixture.nativeElement.querySelector('[data-test=status]').innerText).toEqual(component.status.APROVADA);
  });

  it('should have a message', () => {
    expect(fixture.nativeElement.querySelector('[data-test=msg]').innerText).toEqual(component.message[component.status.APROVADA]);
  });

  it('should have a button', () => {
    expect(fixture.nativeElement.querySelector('[data-test=button]')).toBeTruthy();
  });

  it('should render the button label', () => {
    expect(fixture.nativeElement.querySelector('[data-test=button]').innerText).toEqual(component.btnClose);
  });

  it('should emit a boolean on click', () => {
    
    // spy on event emitter 
    spyOn(component.closeResponseModal, 'emit');
 
    // trigger the click
    const button = fixture.nativeElement.querySelector('[data-test=button]');
    button.dispatchEvent(new Event('click'));
 
    fixture.detectChanges();
 
    expect(component.closeResponseModal.emit).toHaveBeenCalledWith(true);
 });

  
});
