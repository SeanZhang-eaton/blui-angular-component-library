import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PxbProgressIconComponent } from '../pxb-progress-icon.component';

import { PieComponent } from './pie.component';

describe('PieComponent', () => {
  let component: PieComponent;
  let fixture: ComponentFixture<PieComponent>;

  beforeEach(waitForAsync(() => {
    void TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [PxbProgressIconComponent, PieComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    void expect(component).toBeTruthy();
  });
});
