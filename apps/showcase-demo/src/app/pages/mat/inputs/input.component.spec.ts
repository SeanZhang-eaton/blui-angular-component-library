import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputsComponent } from './inputs.component';

describe('MatInputsComponent', () => {
  let component: MatInputsComponent;
  let fixture: ComponentFixture<MatInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatInputsComponent, NoopAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    void expect(component).toBeTruthy();
  });
});
