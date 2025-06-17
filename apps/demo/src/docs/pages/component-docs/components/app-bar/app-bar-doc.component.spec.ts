import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppBarDocComponent } from './app-bar-doc.component';
import { AppBarDocModule } from './app-bar-doc.module';

describe('AppBarDocComponent', () => {
  beforeEach(() => {
    void TestBed.configureTestingModule({
      imports: [AppBarDocModule, RouterTestingModule],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AppBarDocComponent);
    const app = fixture.debugElement.componentInstance;
    void expect(app).toBeTruthy();
  });
});
