import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CardUserComponent } from './components/card-user/card-user.component';
import { UserService } from './services/user.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CardUserComponent
      ],
      providers: [
        UserService,
      ],
      imports: [
        HttpClientTestingModule,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
