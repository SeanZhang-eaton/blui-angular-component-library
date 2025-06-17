import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ChannelValueDocComponent } from './channel-value-doc.component';
import { ChannelValueDocModule } from './channel-value-doc.module';

describe('ChannelValueDocComponent', () => {
  beforeEach(() => {
    void TestBed.configureTestingModule({
      imports: [ChannelValueDocModule, RouterTestingModule],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ChannelValueDocComponent);
    const app = fixture.debugElement.componentInstance;
    void expect(app).toBeTruthy();
  });
});
