import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DrawerModule } from '@brightlayer-ui/angular-components/core';

import { SharedCompDocsModule } from '../../../shared/shared-comp-docs.module';

import { PermanentVariantExampleComponent } from './examples/permanent.component';
import { PersistentVariantExampleComponent } from './examples/persistent.component';
import { PlaygroundComponent } from './examples/playground.component';
import { RailVariantExampleComponent } from './examples/rail.component';
import { RailCondensedVariantExampleComponent } from './examples/rail-condensed.component';
import { TemporaryVariantExampleComponent } from './examples/temporary.component';
import { DrawerLayoutDocComponent } from './drawer-layout-doc.component';

@NgModule({
  declarations: [
    DrawerLayoutDocComponent,
    TemporaryVariantExampleComponent,
    RailVariantExampleComponent,
    PersistentVariantExampleComponent,
    PermanentVariantExampleComponent,
    PlaygroundComponent,
    RailCondensedVariantExampleComponent,
  ],
  imports: [DrawerModule, BrowserAnimationsModule, SharedCompDocsModule, MatToolbarModule],
  exports: [DrawerLayoutDocComponent],
})
export class DrawerLayoutDocModule {}
