import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BatteryComponent } from './battery/battery.component';
import { HeartComponent } from './heart/heart.component';
import { PieComponent } from './pie/pie.component';
import { UpsComponent } from './ups/ups.component';
import { PxbProgressIconComponent } from './pxb-progress-icon.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PxbProgressIconComponent, BatteryComponent, HeartComponent, PieComponent, UpsComponent],
  exports: [PxbProgressIconComponent, BatteryComponent, HeartComponent, PieComponent, UpsComponent],
})
export class ProgressIconsModule {}
