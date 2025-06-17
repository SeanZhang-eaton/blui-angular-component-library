import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { count } from '../../utils/test-utils';
import { ChannelValueModule } from '..';

import { HeroComponent } from './hero.component';
import { HeroModule } from './hero.module';

@Component({
  template: `
    <blui-hero label="Duration">
      <blui-channel-value value="60" units="hours"></blui-channel-value>
    </blui-hero>
  `,
})
class TestChannelValueComponent {}

@Component({
  template: `
    <blui-hero label="Duration">
      <div blui-primary id="test-primary-icon">Icon</div>
    </blui-hero>
  `,
})
class TestPrimaryIconComponent {}

@Component({
  template: `
    <blui-hero label="Duration" value="60" units="hours">
      <div blui-secondary id="test-secondary-icon">Icon</div>
    </blui-hero>
  `,
})
class TestSecondaryIconComponent {}

describe('HeroComponent', () => {
  let fixture: ComponentFixture<HeroComponent>;
  let component: HeroComponent;

  beforeEach(waitForAsync(() => {
    void TestBed.configureTestingModule({
      declarations: [TestChannelValueComponent, TestPrimaryIconComponent, TestSecondaryIconComponent],
      imports: [HeroModule, ChannelValueModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
  });

  it('should initialize', () => {
    fixture.detectChanges();
    void expect(component).toBeTruthy();
  });

  it('should render a label', () => {
    component.label = 'Test Label';
    fixture.detectChanges();
    const label = fixture.nativeElement.querySelector('.blui-hero-label');
    void expect(label.innerHTML).toBe('Test Label');
  });

  it('should create and render a blui-channel-value', () => {
    component.label = 'Temp';
    component.value = '80';
    component.units = 'C';
    fixture.detectChanges();
    const value = fixture.nativeElement.querySelector('.blui-channel-value-value');
    const units = fixture.nativeElement.querySelector('.blui-channel-value-units');
    void expect(value.innerText).toBe('80');
    void expect(units.innerText).toBe('C');
  });

  it('should accept and project a blui-channel-value', () => {
    const channelValueFixture = TestBed.createComponent(TestChannelValueComponent);
    channelValueFixture.detectChanges();
    const value = channelValueFixture.nativeElement.querySelector('.blui-channel-value-value');
    const units = channelValueFixture.nativeElement.querySelector('.blui-channel-value-units');
    void expect(value.innerText).toBe('60');
    void expect(units.innerText).toBe('hours');
  });

  it('should render an icon', () => {
    const iconFixture = TestBed.createComponent(TestPrimaryIconComponent);
    iconFixture.detectChanges();
    const icon = iconFixture.nativeElement.querySelector('#test-primary-icon');
    void expect(icon).toBeTruthy();
  });

  it('should render a secondary icon', () => {
    const iconFixture = TestBed.createComponent(TestSecondaryIconComponent);
    iconFixture.detectChanges();
    const icon = iconFixture.nativeElement.querySelector('#test-secondary-icon');
    void expect(icon).toBeTruthy();
  });

  it('should enforce class naming conventions', () => {
    const classList = [
      '.blui-hero-content',
      '.blui-hero-primary-wrapper',
      '.blui-hero-channel-value-wrapper',
      '.blui-hero-label',
    ];
    for (const className of classList) {
      count(fixture, className);
    }
  });
});
