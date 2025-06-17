import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ListItemTagDocComponent } from './list-item-tag-doc.component';
import { ListItemTagDocModule } from './list-item-tag-doc.module';

describe('ListItemTagDocComponent', () => {
  beforeEach(() => {
    void TestBed.configureTestingModule({
      imports: [ListItemTagDocModule, RouterTestingModule],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ListItemTagDocComponent);
    const app = fixture.debugElement.componentInstance;
    void expect(app).toBeTruthy();
  });
});
