import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { count } from '../../utils/test-utils';

import { AppBarModule } from './app-bar.module';

@Component({
  template: `
    <blui-app-bar mode="collapsed">
      <div>title</div>
    </blui-app-bar>
  `,
})
class TestBasicUsageComponent {}

describe('AppBarComponent', () => {
  let component: TestBasicUsageComponent;
  let fixture: ComponentFixture<TestBasicUsageComponent>;

  beforeEach(() => {
    void TestBed.configureTestingModule({
      declarations: [TestBasicUsageComponent],
      imports: [AppBarModule],
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
      '.blui-app-bar',
      '.mat-elevation-z4',
      '.blui-app-bar-content',
      '.blui-app-bar-background',
      '.blui-app-bar-collapsed',
      '.blui-app-bar-body-wrapper',
    ];
    for (const className of classList) {
      count(fixture, className);
    }
  });
});
