import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PxbProgressIconComponent } from '../pxb-progress-icon.component';

import { UpsComponent } from './ups.component';

describe('UPSComponent', () => {
  let component: UpsComponent;
  let fixture: ComponentFixture<UpsComponent>;

  beforeEach(waitForAsync(() => {
    void TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [PxbProgressIconComponent, UpsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    void expect(component).toBeTruthy();
  });
});
