import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { DrawerLayoutComponent } from './drawer-layout.component';

@NgModule({
  declarations: [DrawerLayoutComponent],
  imports: [CommonModule, MatSidenavModule],
  exports: [DrawerLayoutComponent],
})
export class DrawerLayoutModule {}
