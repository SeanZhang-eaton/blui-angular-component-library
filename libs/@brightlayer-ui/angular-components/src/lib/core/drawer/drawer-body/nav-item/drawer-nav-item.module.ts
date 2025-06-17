import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { InfoListItemModule } from '../../../info-list-item/public-api';

import { DrawerNavItemComponent } from './drawer-nav-item.component';

@NgModule({
  declarations: [DrawerNavItemComponent],
  imports: [
    MatTooltipModule,
    CommonModule,
    InfoListItemModule,
    MatIconModule,
    MatDividerModule,
    MatRippleModule,
    MatExpansionModule,
  ],
  exports: [DrawerNavItemComponent],
})
export class DrawerNavItemModule {}
