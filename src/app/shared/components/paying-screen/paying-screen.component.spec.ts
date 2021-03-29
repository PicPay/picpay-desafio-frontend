import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { PayingScreenComponent } from './paying-screen.component';
import { PayingScreenService } from './paying-screen.service';

describe('PayingScreenComponent', () => {
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
          },
        },
      ],
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
