import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmptyStateModule } from '@brightlayer-ui/angular-components/core';

import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';

import { BasicExampleComponent } from './examples/basic.component';
import { PlaygroundComponent } from './examples/playground.component';
import { WithActionsComponent } from './examples/with-actions.component';
import { WithContentComponent } from './examples/with-content.component';
import { WithDescriptionComponent } from './examples/with-description.component';
import { WithinCardComponent } from './examples/within-card.component';
import { EmptyStateDocComponent } from './empty-state-doc.component';

@NgModule({
  declarations: [
    EmptyStateDocComponent,
    BasicExampleComponent,
    WithDescriptionComponent,
    WithActionsComponent,
    WithContentComponent,
    WithinCardComponent,
    PlaygroundComponent,
  ],
  imports: [EmptyStateModule, SharedCompDocsModule, MatIconModule, MatExpansionModule, BrowserAnimationsModule],
  exports: [EmptyStateDocComponent],
})
export class EmptyStateDocModule {}
