import { of } from 'rxjs';
import { ThemeService } from '@core/services/theme/theme.service';
import { UserFilter } from '@shared/services/user/user.service';
import {
  async,
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
} from '@angular/core/testing';
import { ComponentsModule } from '@shared/components/components.module';
import { HeaderComponent } from './header.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let debugElement: DebugElement;

  let themeServiceSpy: jasmine.SpyObj<ThemeService>;

  beforeEach(async(() => {
    themeServiceSpy = jasmine.createSpyObj('ThemeService', [
      'isAlternateTheme',
      'changeTheme',
      'alternateClass',
      'body'
    ]);
    TestBed.configureTestingModule({
      imports: [ComponentsModule],
      providers: [{ provide: ThemeService, useValue: themeServiceSpy }],
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

  it('should change theme', fakeAsync(() => {
    themeServiceSpy.changeTheme();
    component.changeTheme();
    flush();
    const body = document.getElementsByTagName('body').item(0);
    expect(body).toBeTruthy();
    expect(body.className).toContain('theme-alternate');
  }));

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
