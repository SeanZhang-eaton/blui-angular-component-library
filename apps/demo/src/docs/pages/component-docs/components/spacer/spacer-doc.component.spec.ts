import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SpacerDocComponent } from './spacer-doc.component';
import { SpacerDocModule } from './spacer-doc.module';

describe('SpacerDocComponent', () => {
  beforeEach(() => {
    void TestBed.configureTestingModule({
      imports: [SpacerDocModule, RouterTestingModule],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SpacerDocComponent);
    const app = fixture.debugElement.componentInstance;
    void expect(app).toBeTruthy();
  });
});
