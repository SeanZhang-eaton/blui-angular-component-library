import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { count } from '../../utils/test-utils';

import { DrawerComponent } from './drawer.component';
import { DrawerModule } from './drawer.module';

@Component({
  template: `
    <blui-drawer>
      <blui-drawer-header id="test-header"></blui-drawer-header>
    </blui-drawer>
  `,
})
class DrawerHeaderRenderTestComponent {}

@Component({
  template: `
    <blui-drawer>
      <blui-drawer-subheader id="test-subheader"></blui-drawer-subheader>
    </blui-drawer>
  `,
})
class DrawerSubheaderRenderTestComponent {}

@Component({
  template: `
    <blui-drawer>
      <blui-drawer-body id="test-body"></blui-drawer-body>
    </blui-drawer>
  `,
})
class DrawerBodyRenderTestComponent {}

@Component({
  template: `
    <blui-drawer>
      <blui-drawer-footer id="test-footer"></blui-drawer-footer>
    </blui-drawer>
  `,
})
class DrawerFooterRenderTestComponent {}

describe('DrawerComponent', () => {
  let component: DrawerComponent;
  let fixture: ComponentFixture<DrawerComponent>;

  beforeEach(() => {
    void TestBed.configureTestingModule({
      declarations: [
        DrawerHeaderRenderTestComponent,
        DrawerSubheaderRenderTestComponent,
        DrawerBodyRenderTestComponent,
        DrawerFooterRenderTestComponent,
      ],
      imports: [DrawerModule],
    }).compileComponents();
    fixture = TestBed.createComponent(DrawerComponent);
    component = fixture.componentInstance;
    spyOn(component, 'ngOnInit').and.stub();
    spyOn(component, 'ngOnDestroy').and.stub();
  });

  it('should create', () => {
    fixture.detectChanges();
    void expect(component).toBeTruthy();
  });

  it('should render the drawer header', () => {
    const customFixture = TestBed.createComponent(DrawerHeaderRenderTestComponent);
    customFixture.detectChanges();
    void expect(customFixture.nativeElement.querySelector('#test-header')).toBeTruthy();
  });

  it('should render the drawer subheader', () => {
    const customFixture = TestBed.createComponent(DrawerSubheaderRenderTestComponent);
    customFixture.detectChanges();
    void expect(customFixture.nativeElement.querySelector('#test-subheader')).toBeTruthy();
  });

  it('should render the drawer body', () => {
    const customFixture = TestBed.createComponent(DrawerBodyRenderTestComponent);
    customFixture.detectChanges();
    void expect(customFixture.nativeElement.querySelector('#test-body')).toBeTruthy();
  });

  it('should render the drawer footer', () => {
    const customFixture = TestBed.createComponent(DrawerFooterRenderTestComponent);
    customFixture.detectChanges();
    void expect(customFixture.nativeElement.querySelector('#test-footer')).toBeTruthy();
  });

  it('should enforce class naming conventions', () => {
    fixture.detectChanges();
    const classList = ['.blui-drawer-content', '.blui-drawer-hover-area'];
    for (const className of classList) {
      count(fixture, className);
    }
  });
});
