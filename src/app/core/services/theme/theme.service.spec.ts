import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let themeService: ThemeService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeService],
    });

    themeService = TestBed.get(ThemeService);
  });

  it('should change theme', () => {
    themeService.changeTheme();

    expect(themeService.body.className).toContain(themeService.alternateClass);
  });

  it('should retrive if is theme-alternate', () => {
    const isAlternateTheme$ = of(themeService.isAlternateTheme());
    expect(isAlternateTheme$).toBeTruthy();
  });
});
