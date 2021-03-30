import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { PayingScreenComponent } from './paying-screen.component';
import { PayingScreenService } from './paying-screen.service';

describe('PayingScreenService', () => {
  let service: PayingScreenService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PayingScreenComponent],
      providers: [PayingScreenService],
    }).overrideModule(BrowserDynamicTestingModule, {
      set: { entryComponents: [PayingScreenComponent] },
    });
  }));

  beforeEach(() => {
    service = TestBed.get(PayingScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test open component', () => {
    service.open();

    /* tslint:disable:no-string-literal */
    expect(service['isOpen']).toEqual(true);
    /* tslint:disable:no-string-literal */
    expect(service['currentComponentRef'].instance.isDone).toEqual(false);
  });

  it('test close component', () => {
    service.open();
    service.close();

    /* tslint:disable:no-string-literal */
    expect(service['currentComponentRef'].instance.isDone).toEqual(true);
  });

  it('test on destroy component with false done', () => {
    service.open();
    /* tslint:disable:no-string-literal */
    service['currentComponentRef'].instance.done.emit(false);

    /* tslint:disable:no-string-literal */
    expect(service['isOpen']).toEqual(true);
  });

  it('test on destroy component with true done', () => {
    service.open();
    /* tslint:disable:no-string-literal */
    service['currentComponentRef'].instance.done.emit(true);

    /* tslint:disable:no-string-literal */
    expect(service['isOpen']).toEqual(false);
  });
});
