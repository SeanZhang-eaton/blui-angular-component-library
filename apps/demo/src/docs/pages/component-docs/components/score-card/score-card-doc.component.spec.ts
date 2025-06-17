import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ScoreCardDocComponent } from './score-card-doc.component';
import { ScoreCardDocModule } from './score-card-doc.module';

describe('ScoreCardDocComponent', () => {
  beforeEach(() => {
    void TestBed.configureTestingModule({
      imports: [ScoreCardDocModule, RouterTestingModule],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ScoreCardDocComponent);
    const app = fixture.debugElement.componentInstance;
    void expect(app).toBeTruthy();
  });
});
