import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChannelValueModule, InfoListItemModule, ListItemTagModule } from '@brightlayer-ui/angular-components/core';

import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';

import { BasicExampleComponent } from './examples/basic.component';
import { ComplexExampleComponent } from './examples/complex.component';
import { PlaygroundComponent } from './examples/playground.component';
import { ListItemTagDocComponent } from './list-item-tag-doc.component';

@NgModule({
  declarations: [ListItemTagDocComponent, BasicExampleComponent, ComplexExampleComponent, PlaygroundComponent],
  imports: [SharedCompDocsModule, ListItemTagModule, ChannelValueModule, InfoListItemModule, RouterModule],
  exports: [ListItemTagDocComponent],
})
export class ListItemTagDocModule {}
