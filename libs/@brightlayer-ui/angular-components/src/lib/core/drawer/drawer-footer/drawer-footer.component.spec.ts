import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { count } from '../../../utils/test-utils';

import { DrawerFooterComponent } from './drawer-footer.component';
import { DrawerFooterModule } from './drawer-footer.module';

@Component({
  template: `
    <blui-drawer-footer>
      <div id="test-footer-content">test footer content</div>
    </blui-drawer-footer>
  `,
})
class TestDrawerFooterComponent {}

describe('DrawerFooterComponent', () => {
  let component: DrawerFooterComponent;
  let fixture: ComponentFixture<DrawerFooterComponent>;

  beforeEach(() => {
    void TestBed.configureTestingModule({
      declarations: [TestDrawerFooterComponent],
      imports: [DrawerFooterModule],
    }).compileComponents();
    fixture = TestBed.createComponent(DrawerFooterComponent);
    component = fixture.componentInstance;
    spyOn(component, 'ngOnInit').and.stub();
    spyOn(component, 'ngOnDestroy').and.stub();
  });

  it('should create', () => {
    fixture.detectChanges();
    void expect(component).toBeTruthy();
  });

  it('should render footerContent', () => {
    const customFixture = TestBed.createComponent(TestDrawerFooterComponent);
    customFixture.detectChanges();
    const content: HTMLElement = customFixture.nativeElement.querySelector('#test-footer-content');
    void expect(content.innerHTML).toBe('test footer content');
  });

  it('should enforce class naming conventions', () => {
    const customFixture = TestBed.createComponent(TestDrawerFooterComponent);
    customFixture.detectChanges();
    const classList = ['.blui-drawer-footer', '.blui-drawer-footer-content'];
    for (const className of classList) {
      count(customFixture, className);
    }
  });
});
