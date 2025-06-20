/// <reference types="vitest/globals" />
import { ComponentFixture } from '@angular/core/testing';

// Using a selector, counts the number of instances.
export const count = (fixture: ComponentFixture<unknown>, selector: string, expected = 1): void => {
  const instances = fixture.nativeElement.querySelectorAll(selector);
  const length = instances.length;
  void expect(length, `Expected ${expected} instances of '${selector}', but found ${length}`).toBe(expected);
};

export const mockVoidFunction = (): void => {
  return void 0;
};
