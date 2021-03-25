import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.titleField = 'Pagamento para Antoine Watteau';
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Testando o html do componente Card
   */

  describe('checking content', () => {
    it('should contain title "Pagamento para Antoine Watteau"', () => {
      fixture.detectChanges();
      let title = fixture.debugElement.query(By.css('.card__header span'))
        .nativeElement;
      expect(title.innerText).toContain('Pagamento para Antoine Watteau');
    });
  });

  /**
   * Testando o css do componente Card
   */

  describe('checking css', () => {
    it('should have the class "card"', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.card'));
      expect(el).toBeTruthy();
    });
    it('should have the class "card__wrapper"', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.card__wrapper'));
      expect(el).toBeTruthy();
    });
    it('should have the class "card__header"', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.card__header'));
      expect(el).toBeTruthy();
    });

    it('should have the class "card__content"', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.card__content'));
      expect(el).toBeTruthy();
    });

    it('should have the class "button"', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.button'));
      expect(el).toBeTruthy();
    });

    it('should have the class "button--close"', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.button--close'));
      expect(el).toBeTruthy();
    });
  });
});
