import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { successPaymentTransactionResultMock, User, userOneMock } from '@picpay-lib/ngx-domain';
import { NgxUserCardComponent } from './ngx-user-card.component';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatDialogHarness } from '@angular/material/dialog/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPayToUserModule } from '@picpay-lib/ngx-component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('UserCardComponent', () => {
  let component: NgxUserCardComponent;
  let fixture: ComponentFixture<NgxUserCardComponent>;
  const oneUser: User = new User(userOneMock);
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxUserCardComponent],
      imports: [NgxPayToUserModule, MatDialogModule, NoopAnimationsModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxUserCardComponent);
    component = fixture.componentInstance;
    component.user = oneUser;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.documentRootLoader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open pay-to-user modal when pay', async () => {
    component.pay();
    const dialogs = await loader.getAllHarnesses(MatDialogHarness.with({ selector: '#pay-to-user' }));
    expect(dialogs.length).toBe(1);
  });

  it('should not open payment-result modal after an esc on pay-to-user', async () => {
    component.pay();
    let dialogs = await loader.getAllHarnesses(MatDialogHarness.with({ selector: '#pay-to-user' }));
    expect(dialogs.length).toBe(1);
    await dialogs[0].close();

    dialogs = await loader.getAllHarnesses(MatDialogHarness.with({ selector: '#payment-result' }));
    expect(dialogs.length).toBe(0);
  });

  it('should open payment-result modal after pay to a user', async () => {
    const dialogRef = component.openPayToUserDialog();
    spyOn(dialogRef, 'afterClosed').and.returnValue(of(successPaymentTransactionResultMock));
    spyOn(component, 'openPayToUserDialog').and.returnValue(dialogRef);
    component.pay();
    let dialogs = await loader.getAllHarnesses(MatDialogHarness.with({ selector: '#pay-to-user' }));
    expect(dialogs.length).toBe(1);

    dialogs = await loader.getAllHarnesses(MatDialogHarness.with({ selector: '#payment-result' }));
    expect(dialogs.length).toBe(1);
  });
});
