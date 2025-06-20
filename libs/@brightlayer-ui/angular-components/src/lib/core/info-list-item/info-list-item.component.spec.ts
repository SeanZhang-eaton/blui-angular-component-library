import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { count, mockVoidFunction } from '../../utils/test-utils';

import { InfoListItemModule } from './info-list-item.module';

@Component({
  template: `
    <blui-info-list-item
      [statusColor]="statusColor"
      [chevron]="chevron"
      [dense]="dense"
      [avatar]="avatar"
      [hidePadding]="hidePadding"
      [wrapSubtitle]="wrapSubtitle"
      [wrapTitle]="wrapTitle"
      [divider]="divider"
    >
      <div blui-title>Test Title</div>
      <div blui-subtitle>Test Subtitle</div>
      <mat-icon blui-icon>mail</mat-icon>
    </blui-info-list-item>
  `,
})
class TestBasicUsageComponent {
  @Input() statusColor;
  @Input() chevron;
  @Input() dense;
  @Input() avatar;
  @Input() hidePadding;
  @Input() wrapSubtitle;
  @Input() wrapTitle;
  @Input() divider;
}

@Component({
  template: `
    <blui-info-list-item>
      <div blui-title>title</div>
      <mat-icon blui-icon>mail</mat-icon>
    </blui-info-list-item>
  `,
})
class TestIconComponent {}

@Component({
  template: ` <blui-info-list-item> </blui-info-list-item> `,
})
class TestMissingTitleComponent {}

@Component({
  template: `
    <blui-info-list-item>
      <div blui-title>title</div>
      <div blui-left-content class="test-left">lefty</div>
    </blui-info-list-item>
  `,
})
class TestLeftContentComponent {}

@Component({
  template: `
    <blui-info-list-item>
      <div blui-title>title</div>
      <div blui-right-content class="test-right">righty</div>
    </blui-info-list-item>
  `,
})
class TestRightContentComponent {}

describe('InfoListItemComponent', () => {
  let component: TestBasicUsageComponent;
  let fixture: ComponentFixture<TestBasicUsageComponent>;

  beforeEach(waitForAsync(() => {
    void TestBed.configureTestingModule({
      declarations: [
        TestBasicUsageComponent,
        TestMissingTitleComponent,
        TestIconComponent,
        TestLeftContentComponent,
        TestRightContentComponent,
      ],
      imports: [InfoListItemModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBasicUsageComponent);
    component = fixture.componentInstance;
  });

  it('should initialize', () => {
    fixture.detectChanges();
    void expect(component).toBeTruthy();
  });

  it('should render a title', () => {
    fixture.detectChanges();
    void expect(fixture.nativeElement.querySelector('.blui-info-list-item-title-wrapper').innerHTML).toContain(
      'Test Title'
    );
  });

  it('should render a subtitle', () => {
    fixture.detectChanges();
    void expect(fixture.nativeElement.querySelector('.blui-info-list-item-subtitle-wrapper').innerHTML).toContain(
      'Test Subtitle'
    );
  });

  it('should throw a warning if a title is not provided', () => {
    const customFixture = TestBed.createComponent(TestMissingTitleComponent);
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(mockVoidFunction);
    customFixture.detectChanges();
    void expect(warnSpy).toHaveBeenCalledTimes(1);
  });

  it('should render an icon', () => {
    const customFixture = TestBed.createComponent(TestIconComponent);
    customFixture.detectChanges();
    void expect(customFixture.nativeElement.querySelector('mat-icon').innerHTML).toBe('mail');
  });

  it('should render a left component', () => {
    const customFixture = TestBed.createComponent(TestLeftContentComponent);
    customFixture.detectChanges();
    void expect(customFixture.nativeElement.querySelector('.test-left').innerHTML).toBe('lefty');
  });

  it('should render a right component', () => {
    const customFixture = TestBed.createComponent(TestRightContentComponent);
    customFixture.detectChanges();
    void expect(customFixture.nativeElement.querySelector('.test-right').innerHTML).toBe('righty');
  });

  it('should not have dense class by default', () => {
    fixture.detectChanges();
    const root = fixture.debugElement.query(By.css('.blui-info-list-item'));
    void expect(root.nativeElement.classList.contains('blui-info-list-item-dense')).toBe(false);
  });

  it('should apply dense class when dense is true', () => {
    component.dense = true;
    fixture.detectChanges();
    const root = fixture.debugElement.query(By.css('.blui-info-list-item'));
    void expect(root.nativeElement.classList.contains('blui-info-list-item-dense')).toBe(true);
  });

  it('should enforce class naming conventions', () => {
    component.divider = 'full';
    component.avatar = true;
    component.hidePadding = true;
    fixture.detectChanges();
    const classList = [
      '.blui-info-list-item-content',
      '.blui-info-list-item-icon-wrapper',
      '.blui-info-list-item-left-content-wrapper',
      '.blui-info-list-item-title-wrapper',
      '.blui-info-list-item-subtitle-wrapper',
      '.blui-info-list-item-spacer',
      '.blui-info-list-item-divider',
      '.blui-info-list-item-avatar',
      '.blui-info-list-item-hide-padding',
      '.blui-info-list-item-right-content',
      '.blui-info-list-item-right-content-wrapper',
    ];
    for (const className of classList) {
      count(fixture, className);
    }
  });
});
