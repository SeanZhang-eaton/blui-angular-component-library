import { NgModule } from '@angular/core';
import { DrawerModule } from '@brightlayer-ui/angular-components/core';

import { SharedCompDocsModule } from '../../../shared/shared-comp-docs.module';

import { BasicExampleComponent } from './examples/basic.component';
import { ComplexExampleComponent } from './examples/complex.component';
import { PlaygroundComponent } from './examples/playground.component';
import { DrawerFooterDocComponent } from './drawer-footer-doc.component';

@NgModule({
  declarations: [DrawerFooterDocComponent, BasicExampleComponent, ComplexExampleComponent, PlaygroundComponent],
  imports: [DrawerModule, SharedCompDocsModule],
  exports: [DrawerFooterDocComponent],
})
export class DrawerFooterDocModule {}
