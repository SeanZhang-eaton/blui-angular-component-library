import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ToolbarMenuDocComponent } from './toolbar-menu-doc.component';
import { ToolbarMenuDocModule } from './toolbar-menu-doc.module';

describe('ToolbarDocComponent', () => {
  beforeEach(() => {
    void TestBed.configureTestingModule({
      imports: [ToolbarMenuDocModule, RouterTestingModule],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ToolbarMenuDocComponent);
    const app = fixture.debugElement.componentInstance;
    void expect(app).toBeTruthy();
  });
});
