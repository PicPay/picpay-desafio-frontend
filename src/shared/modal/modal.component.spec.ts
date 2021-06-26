import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ModalComponent } from './modal.component';

fdescribe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve ser exibido o modal quando #isModalVisivel:true', () => {
    component.isModalVisivel = true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.modal'))).toBeTruthy();
    component.isModalVisivel = false;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.modal'))).toBeFalsy();
  })

  it('Deve exibir o #title', () => {
    component.isModalVisivel = true;
    component.titulo = 'Título teste';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.title > span')).nativeElement.textContent.trim()).toBe('Título teste')
  })

  describe('Quando modal estiver aberto', () => {
    beforeEach(() => {
      component.isModalVisivel = true;
      fixture.detectChanges();
    })

    it('Deve ser fechado ao clicar no X', () => {
      const botaoFechar = fixture.debugElement.query(By.css('button.close-button'));
      botaoFechar.nativeElement.click();
      fixture.detectChanges();
      expect(component.isModalVisivel).toBe(false);
      expect(fixture.debugElement.query(By.css('.modal'))).toBeFalsy();
    })

    it('Deve ser fechado ao clicar no backdrop', () => {
      const backdrop = fixture.debugElement.query(By.css('.modal-backdrop'));
      backdrop.nativeElement.click();
      fixture.detectChanges();
      expect(component.isModalVisivel).toBe(false);
      expect(fixture.debugElement.query(By.css('.modal'))).toBeFalsy();
    })
  })
});
