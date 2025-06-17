import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { EmptyStateModule } from '@brightlayer-ui/angular-components/core';

import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { PxbLogoComponent } from './pxb-logo/pxb-logo.component';

@NgModule({
  declarations: [PxbLogoComponent, ComingSoonComponent],
  imports: [CommonModule, EmptyStateModule, MatIconModule],
  exports: [PxbLogoComponent, ComingSoonComponent],
})
export class AppCommonComponentsModule {}
