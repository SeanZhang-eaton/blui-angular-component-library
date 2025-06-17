import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SpacerModule } from '../utility/spacer.module';

import { AppBarComponent } from './app-bar.component';

@NgModule({
  declarations: [AppBarComponent],
  imports: [CommonModule, MatToolbarModule, SpacerModule, MatIconModule],
  exports: [AppBarComponent],
})
export class AppBarModule {}
