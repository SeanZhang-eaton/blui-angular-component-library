import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { count, mockVoidFunction } from '../../../../utils/test-utils';

import { DrawerNavItemComponent } from './drawer-nav-item.component';
import { DrawerNavItemModule } from './drawer-nav-item.module';

@Component({
  template: ` <blui-drawer-nav-item [hidden]="true"></blui-drawer-nav-item> `,
})
class DrawerHiddenNavItemComponent {}

describe('DrawerNavItemComponent', () => {
  let component: DrawerNavItemComponent;
  let fixture: ComponentFixture<DrawerNavItemComponent>;

  beforeEach(() => {
    void TestBed.configureTestingModule({
      declarations: [DrawerHiddenNavItemComponent],
      imports: [DrawerNavItemModule, NoopAnimationsModule],
    }).compileComponents();
    fixture = TestBed.createComponent(DrawerNavItemComponent);
    component = fixture.componentInstance;
    vi.spyOn(component, 'ngOnInit').mockImplementation(mockVoidFunction);
    vi.spyOn(component, 'ngOnDestroy').mockImplementation(mockVoidFunction);
  });

  it('should create', () => {
    fixture.detectChanges();
    void expect(component).toBeTruthy();
  });

  it('should not render the nav item if hidden is true', () => {
    const hiddenFixture = TestBed.createComponent(DrawerHiddenNavItemComponent);
    hiddenFixture.detectChanges();
    const navItem = hiddenFixture.nativeElement.querySelector('.blui-drawer-nav-item-content');
    void expect(navItem).toBeFalsy();
  });

  it('should enforce class naming conventions', () => {
    component.hasChildren = true;
    component.selected = true;
    component.depth = 1;
    vi.spyOn(component, 'isOpen').mockReturnValue(true);
    vi.spyOn(component, 'ngAfterContentInit').mockImplementation(mockVoidFunction);
    vi.spyOn(component, 'isEmpty').mockReturnValue(true);
    fixture.detectChanges();
    let classList = [
      '.blui-drawer-nav-item-content',
      '.blui-drawer-nested-nav-item',
      '.blui-drawer-nav-item-active-square',
      '.blui-drawer-nav-item-active',
      '.blui-drawer-nav-item-active-highlight',
      '.blui-drawer-nav-item-depth-1',
    ];
    for (const className of classList) {
      count(fixture, className);
    }
    vi.spyOn(component, 'isRail').mockReturnValue(true);
    fixture.detectChanges();
    classList = ['.blui-drawer-nav-item-rail', '.blui-drawer-nav-item-rail-text'];
    for (const className of classList) {
      count(fixture, className);
    }
  });
});
