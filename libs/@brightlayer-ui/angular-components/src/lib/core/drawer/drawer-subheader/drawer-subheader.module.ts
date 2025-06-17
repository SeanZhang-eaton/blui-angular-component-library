import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { DrawerSubheaderComponent } from './drawer-subheader.component';

@NgModule({
  declarations: [DrawerSubheaderComponent],
  imports: [CommonModule, MatDividerModule],
  exports: [DrawerSubheaderComponent],
})
export class DrawerSubheaderModule {}
