import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MobileStepperComponent } from './mobile-stepper.component';

@NgModule({
  declarations: [MobileStepperComponent],
  imports: [CommonModule, MatButtonModule, MatProgressBarModule],
  exports: [MobileStepperComponent],
})
export class MobileStepperModule {}
