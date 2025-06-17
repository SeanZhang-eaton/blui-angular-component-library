import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PxbProgressIconComponent } from '../pxb-progress-icon.component';

import { PieComponent } from './pie.component';

describe('PieComponent', () => {
  let component: PieComponent;
  let fixture: ComponentFixture<PieComponent>;

  beforeEach(async(() => {
    void TestBed.configureTestingModule({
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
