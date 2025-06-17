import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DrawerModule, SpacerModule } from '@brightlayer-ui/angular-components/core';

import { SharedCompDocsModule } from '../../../shared/shared-comp-docs.module';

import { AnatomyComponent } from './examples/anatomy.component';
import { BasicExampleComponent } from './examples/basic.component';
import { FromListComponent } from './examples/from-list.component';
import { PlaygroundComponent } from './examples/playground.component';
import { DrawerDocComponent } from './drawer-doc.component';

@NgModule({
  declarations: [DrawerDocComponent, BasicExampleComponent, AnatomyComponent, FromListComponent, PlaygroundComponent],
  imports: [DrawerModule, SpacerModule, SharedCompDocsModule, RouterModule],
  exports: [DrawerDocComponent],
})
export class DrawerDocModule {}
