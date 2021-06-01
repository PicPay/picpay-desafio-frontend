import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardModalComponent } from './list-card-modal.component';

describe('ListCardModalComponent', () => {
  let component: ListCardModalComponent;
  let fixture: ComponentFixture<ListCardModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCardModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
