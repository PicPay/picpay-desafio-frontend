import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed, async } from "@angular/core/testing";
import { MatDialogModule, MatProgressSpinnerModule } from "@angular/material";
import { AppComponent } from "./app.component";
import { ButtonComponent } from "./components/button/button.component";
import { UsersListComponent } from "./components/users-list/users-list.component";

fdescribe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, UsersListComponent, ButtonComponent],
      imports: [MatProgressSpinnerModule, HttpClientTestingModule, MatDialogModule],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'picpay-desafio-frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("Desafio Picpay Front-end");
  });

  it("should render title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content').textContent).toContain(
      "picpay-desafio-frontend app is running!"
    );
  });
});
