import { UserFilter } from '@shared/services/user/user.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentsModule } from '@shared/components/components.module';
import { HeaderComponent } from './header.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let debugElement: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ComponentsModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change theme', () => {
    component.changeTheme();
    fixture.detectChanges();
    component.isAlternateTheme$.subscribe((value) => {
      expect(value).toBeTruthy();
    });
  });

  it('should list user filter keys', () => {
    component.userFilterKeys = Object.keys(UserFilter).filter((value) =>
      isNaN(+value)
    );
    fixture.detectChanges();
    const spanList = debugElement.queryAll(By.css('.mat-subheading-2'));
    expect(spanList).toBeTruthy();
    expect(spanList.length).toBeGreaterThan(2);
  });
});
