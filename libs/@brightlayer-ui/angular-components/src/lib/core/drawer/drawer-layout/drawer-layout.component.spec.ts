import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { count } from '../../../utils/test-utils';
import { DrawerModule } from '../drawer.module';

import { DrawerLayoutComponent } from './public-api';

@Component({
  template: `
    <blui-drawer-layout variant="persistent">
      <blui-drawer blui-drawer id="test-drawer"></blui-drawer>
      <div blui-content id="test-content"></div>
    </blui-drawer-layout>
  `,
})
class DrawerRenderTestComponent {}

describe('DrawerLayoutComponent', () => {
  let component: DrawerLayoutComponent;
  let fixture: ComponentFixture<DrawerLayoutComponent>;

  beforeEach(() => {
    void TestBed.configureTestingModule({
      declarations: [DrawerRenderTestComponent],
      imports: [DrawerModule, NoopAnimationsModule],
    }).compileComponents();
    fixture = TestBed.createComponent(DrawerLayoutComponent);
    component = fixture.componentInstance;
    spyOn(component, 'ngOnInit').and.stub();
    spyOn(component, 'ngOnDestroy').and.stub();
  });

  it('should render the drawer', () => {
    const customFixture = TestBed.createComponent(DrawerRenderTestComponent);
    customFixture.detectChanges();
    void expect(customFixture.nativeElement.querySelector('#test-drawer')).toBeTruthy();
  });

  it('should render the content', () => {
    const customFixture = TestBed.createComponent(DrawerRenderTestComponent);
    customFixture.detectChanges();
    void expect(customFixture.nativeElement.querySelector('#test-content')).toBeTruthy();
  });

  it('should enforce class naming conventions', () => {
    const customFixture = TestBed.createComponent(DrawerRenderTestComponent);
    customFixture.detectChanges();
    const classList = ['.blui-drawer-layout-content', '.blui-drawer-layout-sidenav'];
    for (const className of classList) {
      count(customFixture, className);
    }
  });
});
