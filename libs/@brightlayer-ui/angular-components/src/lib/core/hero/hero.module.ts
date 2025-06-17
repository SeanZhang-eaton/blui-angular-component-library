import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { ChannelValueModule } from '../channel-value/public-api';

import { HeroComponent } from './hero.component';
import { HeroBannerComponent } from './hero-banner.component';

@NgModule({
  declarations: [HeroComponent, HeroBannerComponent],
  imports: [MatDividerModule, ChannelValueModule, CommonModule],
  exports: [HeroComponent, HeroBannerComponent],
})
export class HeroModule {}
