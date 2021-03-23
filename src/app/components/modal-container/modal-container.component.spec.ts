import { Component, NgModule } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { of } from 'rxjs';
import { ModalService } from 'src/app/services/modal.service';

import { ModalContainerComponent } from './modal-container.component';

@Component({
  selector: 'app-fake',
  template: `<h1>Fake Component</h1>`
})
class FakeComponent {}

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

    modalService.getActiveModal$.and.returnValue(of(FakeComponent))

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ModalService.getActiveModal$ when component starts', () => {
    expect(modalService.getActiveModal$).toHaveBeenCalled();
  });

  it('should render modal Component', () => {
    const renderedModal = fixture.nativeElement.querySelector('app-fake');
    expect(renderedModal).toBeTruthy();
  });
});
