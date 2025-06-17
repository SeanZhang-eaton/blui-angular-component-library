import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SpacerModule } from '@brightlayer-ui/angular-components/core';

import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';

import { FlexComponent } from './examples/flex.component';
import { PixelComponent } from './examples/pixel.component';
import { SpacerDocComponent } from './spacer-doc.component';

@NgModule({
  declarations: [SpacerDocComponent, FlexComponent, PixelComponent],
  imports: [SpacerModule, SharedCompDocsModule, MatIconModule, RouterModule],
  exports: [SpacerDocComponent],
})
export class SpacerDocModule {}
