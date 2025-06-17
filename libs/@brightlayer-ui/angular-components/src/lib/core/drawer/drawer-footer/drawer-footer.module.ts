import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { DrawerFooterComponent } from './drawer-footer.component';

@NgModule({
  declarations: [DrawerFooterComponent],
  imports: [CommonModule, MatDividerModule],
  exports: [DrawerFooterComponent],
})
export class DrawerFooterModule {}
