import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraPesquisaComponent } from './barra-pesquisa.component';

describe('BarraPesquisaComponent', () => {
  let component: BarraPesquisaComponent;
  let fixture: ComponentFixture<BarraPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
