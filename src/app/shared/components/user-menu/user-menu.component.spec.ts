import { UserMenuComponent } from './user-menu.component';


describe('UserMenuComponent', () => {
  function createSubject() {
    return {
      subject: new UserMenuComponent(),
    };
  }

  it('should create instance', () => {
    const { subject } = createSubject();
    expect(subject).toBeTruthy();
  });
});
