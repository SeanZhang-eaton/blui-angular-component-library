import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { ScoreCardComponent } from './score-card.component';

@NgModule({
  declarations: [ScoreCardComponent],
  imports: [CommonModule, MatCardModule, MatDividerModule],
  exports: [ScoreCardComponent],
})
export class ScoreCardModule {}
