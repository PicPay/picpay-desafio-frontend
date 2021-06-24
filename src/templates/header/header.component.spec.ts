import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Verifica exibido no HTML', () => {
    it('Deve conter uma logomarca', () => {
      const logo = fixture.debugElement.query(By.css('img.logo'));
      expect(logo).toBeDefined();
    })

    it('Deve conter uma mensagem', () => {
      const msg = fixture.debugElement.query(By.css('p.msg-bemvindo'));
      expect(msg).toBeDefined();
    })
  })

});
