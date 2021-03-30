import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockPicPayService } from '@mocks/MockPicPayService';
import { PicPayService } from '@services/picpay.service';
import { ButtonPayModule } from '@shared/components/button-pay/button-pay.module';
import { CardUserModule } from '@shared/components/card-user/card-user.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { of } from 'rxjs';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let router: Router;
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  const configureModule = (params) => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        CardUserModule,
        ButtonPayModule,
        NgxSkeletonLoaderModule,
      ],
      providers: [
        {
          provide: PicPayService,
          useClass: MockPicPayService,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params,
          },
        },
      ],
    }).compileComponents();
  };

  const createComponent = () => {
    fixture = TestBed.createComponent(UserComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };

  describe('UserComponent with invalid user id', () => {
    beforeEach(() => {
      configureModule(of({ id: 100 }));
    });

    beforeEach(() => {
      createComponent();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('test navigate to not found page', () => {
      jest.spyOn(router, 'navigate').mockReturnValue(null);

      component.ngOnInit();

      expect(router.navigate).toHaveBeenCalledWith(['/not-found']);
    });
  });

  describe('UserComponent with user param', () => {
    beforeEach(() => {
      configureModule(of({ id: 1 }));
    });

    beforeEach(() => {
      createComponent();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('test that should not navigate to the page not found', () => {
      jest.spyOn(router, 'navigate').mockReturnValue(null);

      component.ngOnInit();

      expect(router.navigate).toHaveBeenCalledTimes(0);
    });
  });
});
