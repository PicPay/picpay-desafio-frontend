import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MOCK_USER } from '@shared/mocks/user/user.mock';
import { SharedModule } from '@shared/shared.module';
import { UserCardComponent } from './user-card.component';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(UserCardComponent);
        debugElement = fixture.debugElement;
        component = fixture.componentInstance;
        component.user = MOCK_USER;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show datas on init', () => {
    const img = debugElement.queryAll(By.css('img.is-rounded'));
    expect(img[0]).toBeTruthy();

    expect(img[0].nativeElement.src).toContain(MOCK_USER.img);

    const labelsValue = debugElement.queryAll(By.css('span.data'));

    expect(labelsValue[0].nativeElement.textContent).toContain(MOCK_USER.name);
    expect(labelsValue[1].nativeElement.textContent).toContain(MOCK_USER.id);
    expect(labelsValue[2].nativeElement.textContent).toContain(
      MOCK_USER.username
    );
  });
});
