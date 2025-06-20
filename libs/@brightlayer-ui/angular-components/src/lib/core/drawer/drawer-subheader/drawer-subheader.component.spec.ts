import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { count, mockVoidFunction } from '../../../utils/test-utils';

import { DrawerSubheaderComponent } from './drawer-subheader.component';
import { DrawerSubheaderModule } from './drawer-subheader.module';

@Component({
  template: `
    <blui-drawer-subheader>
      <div id="test-subheader-content">test subheader content</div>
    </blui-drawer-subheader>
  `,
})
class TestDrawerSubheaderComponent {}

describe('DrawerSubheaderComponent', () => {
  let component: DrawerSubheaderComponent;
  let fixture: ComponentFixture<DrawerSubheaderComponent>;

  beforeEach(() => {
    void TestBed.configureTestingModule({
      declarations: [TestDrawerSubheaderComponent],
      imports: [DrawerSubheaderModule],
    }).compileComponents();
    fixture = TestBed.createComponent(DrawerSubheaderComponent);
    component = fixture.componentInstance;
    vi.spyOn(component, 'ngOnInit').mockImplementation(mockVoidFunction);
    vi.spyOn(component, 'ngOnDestroy').mockImplementation(mockVoidFunction);
  });

  it('should create', () => {
    fixture.detectChanges();
    void expect(component).toBeTruthy();
  });

  it('should render subheaderContent', () => {
    const customFixture = TestBed.createComponent(TestDrawerSubheaderComponent);
    customFixture.detectChanges();
    const content: HTMLElement = customFixture.nativeElement.querySelector('#test-subheader-content');
    void expect(content.innerHTML).toBe('test subheader content');
  });

  it('should enforce class naming conventions', () => {
    const customFixture = TestBed.createComponent(TestDrawerSubheaderComponent);
    customFixture.detectChanges();
    const classList = ['.blui-drawer-subheader', '.blui-drawer-subheader-content'];
    for (const className of classList) {
      count(customFixture, className);
    }
  });
});
