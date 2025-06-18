import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatNavigationComponent } from './navigation.component';

describe('MatNavigationComponent', () => {
  let component: MatNavigationComponent;
  let fixture: ComponentFixture<MatNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatNavigationComponent, NoopAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    void expect(component).toBeTruthy();
  });
});
