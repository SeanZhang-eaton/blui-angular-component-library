import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AppBarModule, ThreeLinerModule } from '@brightlayer-ui/angular-components/core';

import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';

import { CollapsedComponent } from './examples/collapsed.component';
import { ExpandedComponent } from './examples/expanded.component';
import { PlaygroundComponent } from './examples/playground.component';
import { SnapAppBarComponent } from './examples/snap.component';
import { ThreeLinerComponent } from './examples/three-liner.component';
import { AppBarDocComponent } from './app-bar-doc.component';

@NgModule({
  declarations: [
    AppBarDocComponent,
    SnapAppBarComponent,
    ExpandedComponent,
    CollapsedComponent,
    ThreeLinerComponent,
    PlaygroundComponent,
  ],
  imports: [AppBarModule, ThreeLinerModule, SharedCompDocsModule, MatIconModule],
  exports: [AppBarDocComponent],
})
export class AppBarDocModule {}
