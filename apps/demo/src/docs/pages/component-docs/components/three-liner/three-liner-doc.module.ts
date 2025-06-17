import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { ThreeLinerModule, ToolbarMenuModule } from '@brightlayer-ui/angular-components/core';

import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';

import { BasicExampleComponent } from './examples/basic.component';
import { ComplexExampleComponent } from './examples/complex.component';
import { PlaygroundComponent } from './examples/playground.component';
import { ThreeLinerDocComponent } from './three-liner-doc.component';

@NgModule({
  declarations: [ThreeLinerDocComponent, BasicExampleComponent, ComplexExampleComponent, PlaygroundComponent],
  imports: [
    SharedCompDocsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    ThreeLinerModule,
    RouterModule,
    ToolbarMenuModule,
  ],
  exports: [ThreeLinerDocComponent],
})
export class ThreeLinerDocModule {}
