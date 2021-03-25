import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { UsersComponent } from './users.component';
import { ModalComponent } from '../../modal/modal.component';
import { CardComponent } from '../card/card.component';
import { PaymentComponent } from '../payment/payment.component';
import { User } from 'src/app/models/user.model';
import { CurrencyMaskModule } from 'ng2-currency-mask';

const users: User[] = [
  {
    id: 1410,
    name: 'Antoine Watteau',
    username: '@antoine.wateu',
    img:
      'https://sothebys-com.brightspotcdn.com/dims4/default/61c4ad4/2147483647/strip/true/crop/2582x2582+512+394/resize/1200x1200!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2Ff2%2F46%2F12cd38474776a6a37424f7bef933%2Fgettyimages-122219421.jpg',
  },
];

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UsersComponent,
        CardComponent,
        ModalComponent,
        PaymentComponent,
      ],
      providers: [],
      imports: [HttpClientTestingModule, FormsModule, CurrencyMaskModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.users = users;
  });

  it('should create component USER', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Testando o html da página Users
   */

  describe('Checking content', () => {
    it('should contain the name "Antoine Watteau"', () => {
      fixture.detectChanges();
      let user = fixture.debugElement.query(By.css('.user__name'))
        .nativeElement;
      expect(user.innerText).toContain('Antoine Watteau');
    });

    it('should contain the username "@antoine.wateu"', () => {
      fixture.detectChanges();
      let user = fixture.debugElement.query(By.css('.user__username'))
        .nativeElement;
      expect(user.innerText).toContain('@antoine.wateu');
    });
  });

  /**
   * Testando o css da página Users
   */

  describe('checking css', () => {
    it('should have the class "user"', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.user'));
      expect(el).toBeTruthy();
    });

    it('should have the class "user__wrapper"', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.user__wrapper'));
      expect(el).toBeTruthy();
    });

    it('should have the class "user__item"', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.user__item'));
      expect(el).toBeTruthy();
    });

    it('should have the class "user__info"', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.user__info'));
      expect(el).toBeTruthy();
    });

    it('should have the class "user__name"', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.user__name'));
      expect(el).toBeTruthy();
    });

    it('should have the class "user__username"', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.user__username'));
      expect(el).toBeTruthy();
    });

    it('should have the class "button"', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.button'));
      expect(el).toBeTruthy();
    });

    it('should have the class "button--small"', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.button--small'));
      expect(el).toBeTruthy();
    });
  });

  /**
   * Testando as funções da página Users
   */

  describe('checking functions', () => {
    it('should call function "payUser()"', () => {
      component.payUser(users[0]);
      expect(component.payUser).toBeTruthy();
      expect(component.title).toEqual('Pagamento para Antoine Watteau');
      expect(component.selectedUser).toEqual(1410);
    });
  });
});
