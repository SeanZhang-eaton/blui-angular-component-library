import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { count } from '../../utils/test-utils';

import { ThreeLinerModule } from './three-liner.module';

@Component({
  template: `
    <blui-three-liner>
      <div blui-title>title</div>
      <div blui-subtitle>title</div>
      <div blui-info>title</div>
    </blui-three-liner>
  `,
})
class TestBasicUsageComponent {}

describe('ThreeLinerComponent', () => {
  let component: TestBasicUsageComponent;
  let fixture: ComponentFixture<TestBasicUsageComponent>;

  beforeEach(() => {
    void TestBed.configureTestingModule({
      declarations: [TestBasicUsageComponent],
      imports: [ThreeLinerModule],
    }).compileComponents();
    fixture = TestBed.createComponent(TestBasicUsageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    void expect(component).toBeTruthy();
  });

  it('should enforce class naming conventions', () => {
    fixture.detectChanges();
    const classList = [
      '.blui-three-liner-content',
      '.blui-three-liner-title',
      '.blui-three-liner-subtitle',
      '.blui-three-liner-info',
    ];
    for (const className of classList) {
      count(fixture, className);
    }
  });
});
