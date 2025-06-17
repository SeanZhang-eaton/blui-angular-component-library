import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ChannelValueModule, HeroModule } from '@brightlayer-ui/angular-components/core';

import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';

import { BasicExampleComponent } from './examples/basic.component';
import { ChannelValueChildrenComponent } from './examples/channel-value-children.component';
import { IconDiffsComponent } from './examples/icon-diffs.component';
import { PlaygroundComponent } from './examples/playground.component';
import { ValueUnitsComponent } from './examples/value-units.component';
import { WithIconComponent } from './examples/with-icon.component';
import { WithinBannerComponent } from './examples/within-banner.component';
import { HeroDocComponent } from './hero-doc.component';

@NgModule({
  declarations: [
    HeroDocComponent,
    BasicExampleComponent,
    IconDiffsComponent,
    ValueUnitsComponent,
    WithIconComponent,
    ChannelValueChildrenComponent,
    WithinBannerComponent,
    PlaygroundComponent,
  ],
  imports: [HeroModule, ChannelValueModule, SharedCompDocsModule, MatIconModule, RouterModule],
  exports: [HeroDocComponent],
})
export class HeroDocModule {}
