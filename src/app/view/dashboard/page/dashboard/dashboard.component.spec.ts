import { DashboardComponent } from './dashboard.component';


describe('DashboardComponent', () => {
  function createSubject() {
    return {
      subject: new DashboardComponent(),
    };
  }

  it('should create instance', () => {
    const { subject } = createSubject();
    expect(subject).toBeTruthy();
  });
});
