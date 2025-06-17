import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ChannelValueModule } from '@brightlayer-ui/angular-components/core';

import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';

import { BasicExampleComponent } from './examples/basic.component';
import { IconComponent } from './examples/icon.component';
import { PlaygroundComponent } from './examples/playground.component';
import { PrefixComponent } from './examples/prefix.component';
import { UnitSpaceComponent } from './examples/unit-space.component';
import { ChannelValueDocComponent } from './channel-value-doc.component';

@NgModule({
  declarations: [
    ChannelValueDocComponent,
    BasicExampleComponent,
    IconComponent,
    PrefixComponent,
    UnitSpaceComponent,
    PlaygroundComponent,
  ],
  imports: [ChannelValueModule, SharedCompDocsModule, MatIconModule, RouterModule],
  exports: [ChannelValueDocComponent],
})
export class ChannelValueDocModule {}
