import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MobileStepperModule } from '@brightlayer-ui/angular-components/core';

import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';

import { BasicExampleComponent } from './examples/basic.component';
import { DotsComponent } from './examples/dots.component';
import { PlaygroundComponent } from './examples/playground.component';
import { ProgressComponent } from './examples/progress.component';
import { TextComponent } from './examples/text.component';
import { MobileStepperDocComponent } from './mobile-stepper-doc.component';

@NgModule({
  declarations: [
    MobileStepperDocComponent,
    DotsComponent,
    BasicExampleComponent,
    PlaygroundComponent,
    TextComponent,
    ProgressComponent,
  ],
  imports: [MobileStepperModule, SharedCompDocsModule, MatIconModule, RouterModule],
  exports: [MobileStepperDocComponent],
})
export class MobileStepperDocModule {}
