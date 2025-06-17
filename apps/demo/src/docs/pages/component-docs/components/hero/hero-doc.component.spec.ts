import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeroDocComponent } from './hero-doc.component';
import { HeroDocModule } from './hero-doc.module';

describe('HeroDocComponent', () => {
  beforeEach(() => {
    void TestBed.configureTestingModule({
      imports: [HeroDocModule, RouterTestingModule],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HeroDocComponent);
    const app = fixture.debugElement.componentInstance;
    void expect(app).toBeTruthy();
  });
});
