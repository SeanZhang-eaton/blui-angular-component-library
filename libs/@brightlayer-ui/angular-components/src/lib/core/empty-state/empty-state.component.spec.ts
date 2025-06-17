import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { count } from '../../utils/test-utils';

import { EmptyStateModule } from './empty-state.module';

@Component({
  selector: 'test-empty-state-basic-usage',
  template: `
    <blui-empty-state [title]="title" [description]="description">
      <span blui-empty-icon></span>
    </blui-empty-state>
  `,
})
class EmptyStateBasicUsageComponent {
  @Input() title = 'Placeholder Title';
  @Input() description: string;
}

@Component({
  selector: 'test-md',
  template: `
    <blui-empty-state class="withIcon">
      <span blui-empty-icon></span>
    </blui-empty-state>
    <blui-empty-state class="empty"></blui-empty-state>

    <blui-empty-state class="withActions">
      <span blui-actions></span>
    </blui-empty-state>
  `,
})
class TestIconActionsComponent {}

@Component({
  selector: 'test-description-content',
  template: `
    <blui-empty-state>
      <span blui-empty-icon></span>
      <div blui-description>description</div>
    </blui-empty-state>
  `,
})
class TestDescriptionContentComponent {}

@Component({
  selector: 'test-title-content',
  template: `
    <blui-empty-state>
      <span blui-empty-icon></span>
      <div blui-title>title</div>
    </blui-empty-state>
  `,
})
class TestTitleContentComponent {}

describe('Empty State Component', () => {
  let fixture: ComponentFixture<EmptyStateBasicUsageComponent>;
  let component: EmptyStateBasicUsageComponent;

  beforeEach(waitForAsync(() => {
    void TestBed.configureTestingModule({
      imports: [EmptyStateModule],
      declarations: [
        EmptyStateBasicUsageComponent,
        TestIconActionsComponent,
        TestDescriptionContentComponent,
        TestTitleContentComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyStateBasicUsageComponent);
    component = fixture.componentInstance;
  });

  it('should initialize', () => {
    fixture.detectChanges();
    void expect(component).toBeTruthy();
  });

  it('should show title when input supplied', () => {
    component.title = 'title';
    fixture.detectChanges();
    const titleElement = fixture.debugElement.query(By.css('h2'));
    void expect(titleElement.nativeElement.innerHTML).toContain('title');
  });

  it('should show title when ng-content supplied', () => {
    const testFixture = TestBed.createComponent(TestTitleContentComponent);
    testFixture.detectChanges();
    const titleElement = testFixture.debugElement.query(By.css('h2'));
    void expect(titleElement.nativeElement.innerHTML).toContain('title');
  });

  it('should show description when input supplied', () => {
    component.description = 'description';
    fixture.detectChanges();
    const descriptionElement = fixture.debugElement.query(By.css('p'));
    void expect(descriptionElement.nativeElement.innerHTML).toContain('description');
  });

  it('should show description when ng-content supplied', () => {
    const testFixture = TestBed.createComponent(TestDescriptionContentComponent);
    testFixture.detectChanges();
    const descriptionElement = testFixture.debugElement.query(By.css('p'));
    void expect(descriptionElement.nativeElement.innerHTML).toContain('description');
  });

  // Action Check
  it('should show actions when supplied', () => {
    const actionFixture = TestBed.createComponent(TestIconActionsComponent);
    let actionElement = actionFixture.debugElement.query(By.css('.withActions [blui-actions]'));
    void expect(actionElement).not.toBeNull();

    actionElement = actionFixture.debugElement.query(By.css('.empty [blui-actions]'));
    void expect(actionElement).toBeNull();
  });

  // Icon Check
  it('should show icon when supplied', () => {
    const iconFixture = TestBed.createComponent(TestIconActionsComponent);
    let actionElement = iconFixture.debugElement.query(By.css('.withIcon [blui-empty-icon]'));
    void expect(actionElement).not.toBeNull();

    actionElement = iconFixture.debugElement.query(By.css('.empty [blui-empty-icon]'));
    void expect(actionElement).toBeNull();
  });

  it('should enforce class naming conventions', () => {
    component.title = 'title';
    component.description = 'description';
    fixture.detectChanges();
    const classList = [
      '.blui-empty-state-content',
      '.blui-empty-state-empty-icon-wrapper',
      '.blui-empty-state-title',
      '.blui-empty-state-description',
      '.blui-empty-state-actions-wrapper',
    ];
    for (const className of classList) {
      count(fixture, className);
    }
  });
});
