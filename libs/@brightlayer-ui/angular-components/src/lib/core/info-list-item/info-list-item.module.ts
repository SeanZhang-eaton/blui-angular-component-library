import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { SpacerModule } from '../utility/spacer.module';

import { InfoListItemComponent } from './info-list-item.component';

@NgModule({
  declarations: [InfoListItemComponent],
  imports: [SpacerModule, MatIconModule, CommonModule, MatListModule, MatDividerModule],
  exports: [InfoListItemComponent, MatIconModule, MatListModule, SpacerModule, MatDividerModule],
})
export class InfoListItemModule {}
