import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { PayingScreenComponent } from './paying-screen.component';
import { PayingScreenService } from './paying-screen.service';

describe('PayingScreenComponent', () => {
  let router: Router;
  let component: PayingScreenComponent;
  let fixture: ComponentFixture<PayingScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PayingScreenComponent],
      imports: [RouterTestingModule],
      providers: [
        PayingScreenService,
        {
          provide: Router,
          useValue: {
            routerState: {
              root: {
                firstChild: {
                  params: of({ id: 1 }),
                },
              },
            },
            navigate: () => {},
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayingScreenComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test on get user id', () => {
    expect(component.userId).toEqual(1);
  });

  it('test on done', () => {
    jest.spyOn(router, 'navigate');
    jest.spyOn(component.done, 'emit');

    component.onDone();

    expect(router.navigate).toHaveBeenCalledWith(['/users', component.userId]);
    expect(component.done.emit).toHaveBeenCalledWith(true);
  });
});
