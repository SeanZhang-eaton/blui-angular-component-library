import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DrawerNavGroupDocComponent } from './drawer-nav-group-doc.component';
import { DrawerNavGroupDocModule } from './drawer-nav-group-doc.module';

describe('DrawerNavItemGroupDocComponent', () => {
  beforeEach(() => {
    void TestBed.configureTestingModule({
      imports: [DrawerNavGroupDocModule, RouterTestingModule],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DrawerNavGroupDocComponent);
    const app = fixture.debugElement.componentInstance;
    void expect(app).toBeTruthy();
  });
});
