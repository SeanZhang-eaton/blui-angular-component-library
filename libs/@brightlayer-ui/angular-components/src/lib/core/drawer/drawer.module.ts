import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DrawerBodyModule } from './drawer-body/drawer-body.module';
import { DrawerFooterModule } from './drawer-footer/drawer-footer.module';
import { DrawerHeaderModule } from './drawer-header/drawer-header.module';
import { DrawerLayoutModule } from './drawer-layout/drawer-layout.module';
import { DrawerSubheaderModule } from './drawer-subheader/drawer-subheader.module';
import { DrawerComponent } from './drawer.component';

@NgModule({
  declarations: [DrawerComponent],
  imports: [
    CommonModule,
    DrawerHeaderModule,
    DrawerSubheaderModule,
    DrawerBodyModule,
    DrawerFooterModule,
    DrawerLayoutModule,
  ],
  exports: [
    DrawerComponent,
    DrawerHeaderModule,
    DrawerSubheaderModule,
    DrawerBodyModule,
    DrawerFooterModule,
    DrawerLayoutModule,
  ],
})
export class DrawerModule {}
