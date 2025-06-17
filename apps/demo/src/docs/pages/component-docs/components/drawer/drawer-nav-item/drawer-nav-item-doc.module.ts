import { NgModule } from '@angular/core';
import { DrawerModule } from '@brightlayer-ui/angular-components/core';

import { SharedCompDocsModule } from '../../../shared/shared-comp-docs.module';

import { BasicExampleComponent } from './examples/basic.component';
import { PlaygroundComponent } from './examples/playground.component';
import { WithIconsExampleComponent } from './examples/with-icons.component';
import { WithNestedItemsComponent } from './examples/with-nested-items.component';
import { WithSelectedItemComponent } from './examples/with-selected-item.component';
import { DrawerNavItemDocComponent } from './drawer-nav-item-doc.component';

@NgModule({
  declarations: [
    PlaygroundComponent,
    DrawerNavItemDocComponent,
    WithIconsExampleComponent,
    BasicExampleComponent,
    WithNestedItemsComponent,
    WithSelectedItemComponent,
  ],
  imports: [DrawerModule, SharedCompDocsModule],
})
export class DrawerNavItemDocModule {}
