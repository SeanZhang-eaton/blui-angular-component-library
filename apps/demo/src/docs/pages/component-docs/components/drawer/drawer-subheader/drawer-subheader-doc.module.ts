import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DrawerModule } from '@brightlayer-ui/angular-components/core';

import { SharedCompDocsModule } from '../../../shared/shared-comp-docs.module';

import { BasicExampleComponent } from './examples/basic.component';
import { ComplexComponent } from './examples/complex.component';
import { PlaygroundComponent } from './examples/playground.component';
import { DrawerSubheaderDocComponent } from './drawer-subheader-doc.component';

@NgModule({
  declarations: [DrawerSubheaderDocComponent, BasicExampleComponent, ComplexComponent, PlaygroundComponent],
  imports: [DrawerModule, SharedCompDocsModule, MatFormFieldModule, MatSelectModule],
  exports: [DrawerSubheaderDocComponent],
})
export class DrawerSubheaderDocModule {}
