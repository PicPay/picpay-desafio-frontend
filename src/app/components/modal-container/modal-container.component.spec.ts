import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { of } from 'rxjs';
import { ModalRef } from 'src/app/models/modal-ref';
import { ModalService } from 'src/app/services/modal.service';

import { ModalContainerComponent } from './modal-container.component';

@Component({
  selector: 'app-fake',
  template: `<h1>Fake Component</h1>`
})
class FakeComponent {
  constructor(public modalRef: ModalRef) {}
}

@NgModule({
  declarations: [ FakeComponent ],
  entryComponents: [ FakeComponent ]
})
class FakeModule {}

describe('ModalContainerComponent', () => {
  let component: ModalContainerComponent;
  let fixture: ComponentFixture<ModalContainerComponent>;
  let modalService: jasmine.SpyObj<ModalService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalContainerComponent ],
      imports: [ FakeModule ],
      providers: [
        { provide: ModalService, useFactory: () => spyOnClass(ModalService) }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContainerComponent);
    modalService = TestBed.get(ModalService);
    component = fixture.componentInstance;
    
    modalService.getActiveModal$.and.returnValue(of(FakeComponent));
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should call ModalService.getActiveModal$ when component starts', () => {
    fixture.detectChanges();
    expect(modalService.getActiveModal$).toHaveBeenCalled();
  });
  
  it('should render modal Component', () => {
    fixture.detectChanges();
    const renderedModal = fixture.nativeElement.querySelector('app-fake');
    expect(renderedModal).toBeTruthy();
    expect(window.getComputedStyle(fixture.nativeElement.querySelector('.modal-backdrop')).visibility)
      .toContain('visible');
    expect(window.getComputedStyle(fixture.nativeElement.querySelector('.modal-wrapper')).visibility)
      .toContain('visible');
  });

  it('should hide when modal is not provided', () => {
    modalService.getActiveModal$.and.returnValue(of(null));
    fixture.detectChanges();

    expect(window.getComputedStyle(fixture.nativeElement.querySelector('.modal-backdrop')).visibility)
      .toContain('hidden');
    expect(window.getComputedStyle(fixture.nativeElement.querySelector('.modal-wrapper')).visibility)
      .toContain('hidden');
  });

  it('should inject a ModalRef into the component', () => {
    fixture.detectChanges();
    expect(component.componentRef.instance.modalRef).toBeTruthy();
  })

  fit('should hide when backdrop div is clicked', () => {
    const backdrop = fixture.nativeElement.querySelector('.modal-backdrop');
    fixture.detectChanges();
    backdrop.click();
    fixture.detectChanges();

    const renderedModal = fixture.nativeElement.querySelector('app-fake');
    expect(renderedModal).toBeFalsy();
    expect(window.getComputedStyle(fixture.nativeElement.querySelector('.modal-backdrop')).visibility)
      .toContain('hidden');
    expect(window.getComputedStyle(fixture.nativeElement.querySelector('.modal-wrapper')).visibility)
      .toContain('hidden');
  })
});
