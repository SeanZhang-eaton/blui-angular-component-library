import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChannelValueComponent } from './channel-value.component';

@NgModule({
  declarations: [ChannelValueComponent],
  imports: [CommonModule],
  exports: [ChannelValueComponent],
})
export class ChannelValueModule {}
