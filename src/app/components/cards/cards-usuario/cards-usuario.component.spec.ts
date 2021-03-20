import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsUsuarioComponent } from './cards-usuario.component';

describe('CardsUsuarioComponent', () => {
  let component: CardsUsuarioComponent;
  let fixture: ComponentFixture<CardsUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
