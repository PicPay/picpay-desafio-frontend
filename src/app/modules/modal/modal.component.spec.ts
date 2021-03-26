import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ModalComponent } from "./modal.component";

describe("ModalComponent", () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("Verifica se o modal muda sua visibilidade ao emitir o evento - close", async () => {
    spyOn(component.visibility, "emit");
    fixture.detectChanges();
    await component.closeModal();
    expect(component.visibility.emit).toHaveBeenCalled();
  });
});
