import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PxbProgressIconComponent } from '../pxb-progress-icon.component';

import { BatteryComponent } from './battery.component';

describe('BatteryComponent', () => {
  let component: BatteryComponent;
  let fixture: ComponentFixture<BatteryComponent>;

  beforeEach(waitForAsync(() => {
    void TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [PxbProgressIconComponent, BatteryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    void expect(component).toBeTruthy();
  });
});
