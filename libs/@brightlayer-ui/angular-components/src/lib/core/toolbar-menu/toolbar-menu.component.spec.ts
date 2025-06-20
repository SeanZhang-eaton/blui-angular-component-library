import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { count } from '../../utils/test-utils';

import { ToolbarMenuComponent } from './toolbar-menu.component';
import { ToolbarMenuModule } from './toolbar-menu.module';

@Component({
  template: `
    <blui-toolbar-menu label="title">
      <button id="test-icon" mat-icon-button blui-icon>
        <mat-icon>menu</mat-icon>
      </button>
      <div blui-toolbar-menu-items id="test-menu">menu text</div>
    </blui-toolbar-menu>
  `,
})
class TestDropdownToolbarComponent {}

describe('ToolbarMenuComponent', () => {
  let component: ToolbarMenuComponent;
  let fixture: ComponentFixture<ToolbarMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestDropdownToolbarComponent],
      imports: [ToolbarMenuModule, MatIconModule, NoopAnimationsModule],
    }).compileComponents();
    fixture = TestBed.createComponent(ToolbarMenuComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render label', () => {
    component.label = 'test title';
    fixture.detectChanges();
    const title = fixture.debugElement.query(By.css('.blui-toolbar-menu-label'));
    expect(title.nativeElement.innerHTML.trim()).toBe('test title');
  });

  it('should render icon', () => {
    const customFixture = TestBed.createComponent(TestDropdownToolbarComponent);
    customFixture.detectChanges();
    const icon: HTMLElement = customFixture.nativeElement.querySelector('#test-icon');
    expect(icon).toBeTruthy();
  });

  const clickMenu = (customFixture): void => {
    customFixture.detectChanges();
    const menuTrigger = document.getElementsByClassName('blui-toolbar-menu-trigger')[0];
    menuTrigger.dispatchEvent(new Event('click'));
    customFixture.detectChanges();
  };

  it('should render menu', () => {
    const customFixture = TestBed.createComponent(TestDropdownToolbarComponent);
    customFixture.detectChanges();
    clickMenu(customFixture);
    const menu = document.getElementById('test-menu');
    expect(menu.textContent.trim()).toBe('menu text');
  });

  it('should enforce class naming conventions', () => {
    const customFixture = TestBed.createComponent(TestDropdownToolbarComponent);
    clickMenu(customFixture);

    // Non-overlay classes
    const classList = [
      '.blui-toolbar-menu',
      '.blui-toolbar-menu-toggle-icon',
      '.blui-toolbar-menu-label',
      '.blui-toolbar-menu-trigger',
      '.blui-toolbar-icon-wrapper',
    ];

    for (const className of classList) {
      count(customFixture, className);
    }

    // Overlay classes
    expect(document.getElementsByClassName('blui-toolbar-menu-menu-wrapper').length).toBe(1);
  });
});
