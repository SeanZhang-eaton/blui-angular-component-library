import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PxbProgressIconComponent } from '../pxb-progress-icon.component';

import { HeartComponent } from './heart.component';

describe('HeartComponent', () => {
  let component: HeartComponent;
  let fixture: ComponentFixture<HeartComponent>;

  beforeEach(waitForAsync((): void => {
    void TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [PxbProgressIconComponent, HeartComponent],
    }).compileComponents();
  }));

  beforeEach((): void => {
    fixture = TestBed.createComponent(HeartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    void expect(component).toBeTruthy();
  });
});
