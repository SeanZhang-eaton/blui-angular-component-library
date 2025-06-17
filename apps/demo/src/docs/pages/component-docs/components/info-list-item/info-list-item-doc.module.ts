import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ChannelValueModule, InfoListItemModule } from '@brightlayer-ui/angular-components/core';

import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';

import { BasicExampleComponent } from './examples/basic.component';
import { DenseComponent } from './examples/dense.component';
import { PlaygroundComponent } from './examples/playground.component';
import { WithIconComponent } from './examples/with-icon.component';
import { WithLeftRightContentComponent } from './examples/with-left-right-content.component';
import { WithStatusComponent } from './examples/with-status.component';
import { WithSubtitleComponent } from './examples/with-subtitle.component';
import { WithinListComponent } from './examples/within-list.component';
import { InfoListItemDocComponent } from './info-list-item-doc.component';

@NgModule({
  declarations: [
    InfoListItemDocComponent,
    BasicExampleComponent,
    WithSubtitleComponent,
    WithIconComponent,
    WithStatusComponent,
    WithLeftRightContentComponent,
    WithinListComponent,
    PlaygroundComponent,
    DenseComponent,
  ],
  imports: [InfoListItemModule, ChannelValueModule, SharedCompDocsModule, MatIconModule],
  exports: [InfoListItemDocComponent],
})
export class InfoListItemDocModule {}
