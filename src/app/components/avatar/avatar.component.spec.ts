import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarComponent } from './avatar.component';

describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AvatarComponent
      ],
      imports: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a placeholder image when imageUrl is not received', () => {
    const compiled = fixture.debugElement.nativeElement;
    if (!component.imageUrl) {
        expect(compiled.querySelector('.avatar').src).toContain(component.defaultImg);
    }
  });

  it('should have the image source received in the imageUrl parameter', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.imageUrl = 'sample_image';
    fixture.detectChanges();

    if (component.imageUrl) {
        expect(compiled.querySelector('.avatar').src).toContain(component.imageUrl);
    }
  });
});
