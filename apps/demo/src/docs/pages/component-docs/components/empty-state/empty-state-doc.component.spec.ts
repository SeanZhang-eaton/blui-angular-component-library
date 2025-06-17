import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EmptyStateDocComponent } from './empty-state-doc.component';
import { EmptyStateDocModule } from './empty-state-doc.module';

describe('EmptyStateDocComponent', () => {
  beforeEach(() => {
    void TestBed.configureTestingModule({
      imports: [EmptyStateDocModule, RouterTestingModule],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(EmptyStateDocComponent);
    const app = fixture.debugElement.componentInstance;
    void expect(app).toBeTruthy();
  });
});
