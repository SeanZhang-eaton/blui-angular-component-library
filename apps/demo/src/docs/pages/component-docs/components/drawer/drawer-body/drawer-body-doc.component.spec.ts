import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DrawerBodyDocComponent } from './drawer-body-doc.component';
import { DrawerBodyDocModule } from './drawer-body-doc.module';

describe('DrawerBodyDocComponent', () => {
  beforeEach(() => {
    void TestBed.configureTestingModule({
      imports: [DrawerBodyDocModule, RouterTestingModule],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(DrawerBodyDocComponent);
    const app = fixture.debugElement.componentInstance;
    void expect(app).toBeTruthy();
  });
});
