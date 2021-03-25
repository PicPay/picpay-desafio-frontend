import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Testando o css do componente Modal
   */

  describe('Checking css', () => {
    it('should have the class "modal__wrapper"', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.modal__wrapper'));
      expect(el).toBeTruthy();
    });
    it('should have the class "modal__content"', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.modal__content'));
      expect(el).toBeTruthy();
    });
    it('should have the class "modal__background"', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.modal__background'));
      expect(el).toBeTruthy();
    });
  });
});
