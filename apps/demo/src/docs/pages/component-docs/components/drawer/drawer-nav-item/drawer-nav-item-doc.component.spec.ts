import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DrawerNavItemDocComponent } from './drawer-nav-item-doc.component';
import { DrawerNavItemDocModule } from './drawer-nav-item-doc.module';

describe('DrawerNavItemDoc', () => {
  beforeEach(() => {
    void TestBed.configureTestingModule({
      imports: [DrawerNavItemDocModule, RouterTestingModule],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DrawerNavItemDocComponent);
    const app = fixture.debugElement.componentInstance;
    void expect(app).toBeTruthy();
  });
});
