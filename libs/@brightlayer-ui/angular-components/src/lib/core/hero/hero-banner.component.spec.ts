import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { count } from '../../utils/test-utils';

import { HeroModule } from './hero.module';
import { HeroBannerComponent } from './hero-banner.component';

@Component({
  template: `
    <blui-hero-banner>
      <blui-hero label="Hero 1" value="96" units="/100"></blui-hero>
      <blui-hero label="Hero 2" value="96" units="/100"></blui-hero>
    </blui-hero-banner>
  `,
})
class TestRenderHeroesComponent {}

describe('HeroBannerComponent', () => {
  let fixture: ComponentFixture<HeroBannerComponent>;
  let component: HeroBannerComponent;

  beforeEach(waitForAsync(() => {
    void TestBed.configureTestingModule({
      declarations: [TestRenderHeroesComponent],
      imports: [HeroModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBannerComponent);
    component = fixture.componentInstance;
  });

  it('should initialize', () => {
    fixture.detectChanges();
    void expect(component).toBeTruthy();
  });

  it('should render a divider', () => {
    component.divider = true;
    fixture.detectChanges();
    const divider = fixture.nativeElement.querySelector('.blui-hero-banner-divider');
    void expect(divider).toBeTruthy();
  });

  it('should not render a divider', () => {
    component.divider = false;
    fixture.detectChanges();
    const divider = fixture.nativeElement.querySelector('.blui-hero-banner-divider');
    void expect(divider).toBeFalsy();
  });

  it('should render two heroes', () => {
    const heroFixture = TestBed.createComponent(TestRenderHeroesComponent);
    heroFixture.detectChanges();
    const heroes = heroFixture.nativeElement.querySelectorAll('.blui-hero');
    void expect(heroes.length).toBe(2);
  });

  it('should enforce class naming conventions', () => {
    component.divider = true;
    fixture.detectChanges();
    const classList = ['.blui-hero-banner-content', '.blui-hero-banner-divider'];
    for (const className of classList) {
      count(fixture, className);
    }
  });
});
