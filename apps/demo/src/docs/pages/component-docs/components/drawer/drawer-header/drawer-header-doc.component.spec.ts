import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DrawerHeaderDocComponent } from './drawer-header-doc.component';
import { DrawerHeaderDocModule } from './drawer-header-doc.module';

describe('DrawerNavItemDoc', () => {
  beforeEach(() => {
    void TestBed.configureTestingModule({
      imports: [DrawerHeaderDocModule, RouterTestingModule],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DrawerHeaderDocComponent);
    const app = fixture.debugElement.componentInstance;
    void expect(app).toBeTruthy();
  });
});
