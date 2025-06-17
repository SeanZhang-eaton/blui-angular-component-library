import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ToolbarMenuModule } from '@brightlayer-ui/angular-components/core';

import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';

import { BasicComponent } from './examples/basic.component';
import { PlaygroundComponent } from './examples/playground.component';
import { WithIconComponent } from './examples/with-icon.component';
import { WithinToolbarComponent } from './examples/within-toolbar.component';
import { ToolbarMenuDocComponent } from './toolbar-menu-doc.component';

@NgModule({
  declarations: [
    ToolbarMenuDocComponent,
    WithIconComponent,
    BasicComponent,
    WithinToolbarComponent,
    PlaygroundComponent,
  ],
  imports: [
    MatToolbarModule,
    ToolbarMenuModule,
    MatListModule,
    MatMenuModule,
    SharedCompDocsModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [ToolbarMenuDocComponent],
})
export class ToolbarMenuDocModule {}
