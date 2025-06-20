import { NgModule } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import '@analogjs/vitest-angular/setup-zone';

@NgModule({
  providers: [provideNoopAnimations(), { provide: MATERIAL_SANITY_CHECKS, useValue: false }],
})
class MaterialTestingDefaultsModule {}
getTestBed().initTestEnvironment(
  [BrowserDynamicTestingModule, MaterialTestingDefaultsModule],
  platformBrowserDynamicTesting()
);
