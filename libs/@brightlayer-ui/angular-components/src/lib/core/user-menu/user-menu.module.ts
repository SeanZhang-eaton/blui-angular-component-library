import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { DrawerHeaderModule } from '../drawer/drawer-header/drawer-header.module';
import { InfoListItemModule } from '../info-list-item/info-list-item.module';

import { UserMenuHeaderComponent } from './user-menu-header/user-menu-header.component';
import { UserMenuComponent } from './user-menu.component';
import { UserMenuAvatarComponent } from './user-menu-avatar.component';

@NgModule({
  declarations: [UserMenuComponent, UserMenuAvatarComponent, UserMenuHeaderComponent],
  imports: [
    CommonModule,
    DrawerHeaderModule,
    InfoListItemModule,
    OverlayModule,
    MatBottomSheetModule,
    MatCardModule,
    MatToolbarModule,
  ],
  exports: [UserMenuComponent, UserMenuAvatarComponent, UserMenuHeaderComponent],
})
export class UserMenuModule {}
