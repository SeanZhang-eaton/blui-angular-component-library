import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';

import { count } from '../../../utils/test-utils';
import { UserMenuModule } from '../user-menu.module';

import { UserMenuHeaderComponent } from './user-menu-header.component';

@Component({
  template: `<blui-user-menu-header title="title" subtitle="subtitle"></blui-user-menu-header>`,
})
class TestUserMenuHeaderComponent {}

@Component({
  template: `
    <blui-user-menu-header>
      <div blui-title-content id="test-title-content">test title content</div>
    </blui-user-menu-header>
  `,
})
class TestUserMenuHeaderWithTitleContentComponent {}

@Component({
  template: `
    <blui-user-menu-header>
      <button id="test-icon" mat-icon-button blui-icon>
        <mat-icon>menu</mat-icon>
      </button>
    </blui-user-menu-header>
  `,
})
class TestUserMenuHeaderWithIconComponent {}

describe('UserMenuHeaderComponent', () => {
  let component: UserMenuHeaderComponent;
  let fixture: ComponentFixture<UserMenuHeaderComponent>;

  beforeEach(() => {
    void TestBed.configureTestingModule({
      declarations: [
        TestUserMenuHeaderComponent,
        TestUserMenuHeaderWithTitleContentComponent,
        TestUserMenuHeaderWithIconComponent,
      ],
      imports: [UserMenuModule, MatIconModule],
    }).compileComponents();
    fixture = TestBed.createComponent(UserMenuHeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    void expect(component).toBeTruthy();
  });

  it('should render title', () => {
    component.title = 'test title';
    fixture.detectChanges();
    const title = fixture.debugElement.query(By.css('.blui-user-menu-header-title'));
    void expect(title.nativeElement.innerHTML.trim()).toBe('test title');
  });

  it('should render subtitle', () => {
    component.title = 'test title';
    component.subtitle = 'test subtitle';
    fixture.detectChanges();
    const subtitle = fixture.debugElement.query(By.css('.blui-user-menu-header-subtitle'));
    void expect(subtitle.nativeElement.innerHTML.trim()).toBe('test subtitle');
  });

  it('should render titleContent', () => {
    const customFixture = TestBed.createComponent(TestUserMenuHeaderWithTitleContentComponent);
    customFixture.detectChanges();
    const content: HTMLElement = customFixture.nativeElement.querySelector('#test-title-content');
    void expect(content.innerHTML).toBe('test title content');
  });

  it('should render icon', () => {
    const customFixture = TestBed.createComponent(TestUserMenuHeaderWithIconComponent);
    customFixture.detectChanges();
    const icon: HTMLElement = customFixture.nativeElement.querySelector('#test-icon');
    void expect(icon).toBeTruthy();
  });

  it('should enforce class naming conventions', () => {
    const customFixture = TestBed.createComponent(TestUserMenuHeaderComponent);
    customFixture.detectChanges();
    const classList = [
      '.blui-user-menu-header',
      '.blui-user-menu-header-content',
      '.blui-user-menu-header-icon-wrapper',
      '.blui-user-menu-header-title-wrapper',
      '.blui-user-menu-header-title',
      '.blui-user-menu-header-subtitle',
    ];
    for (const className of classList) {
      count(customFixture, className);
    }
  });
});
