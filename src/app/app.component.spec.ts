import { TestBed, async, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserRowComponent } from './components/user-row/user-row.component';
import { ModalComponent } from './components/modal/modal.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { AppModule } from './app.module';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        
      ],
      imports:[
        AppModule,
        HttpClientModule

      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'picpay-desafio-frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('picpay-desafio-frontend');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('picpay-desafio-frontend app is running!');
  // });
});
