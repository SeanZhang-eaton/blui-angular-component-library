import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InfoListItemModule } from '../../info-list-item/public-api';

import { DrawerNavGroupComponent } from './nav-group/drawer-nav-group.component';
import { DrawerNavGroupModule } from './nav-group/drawer-nav-group.module';
import { DrawerNavItemModule } from './nav-item/drawer-nav-item.module';
import { DrawerBodyComponent } from './drawer-body.component';

@NgModule({
  declarations: [DrawerBodyComponent],
  imports: [CommonModule, InfoListItemModule, DrawerNavGroupModule, DrawerNavItemModule],
  exports: [
    DrawerBodyComponent,
    DrawerNavGroupComponent,
    InfoListItemModule,
    DrawerNavGroupModule,
    DrawerNavItemModule,
  ],
})
export class DrawerBodyModule {}
