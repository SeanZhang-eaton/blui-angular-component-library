import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { HeroModule, InfoListItemModule, ScoreCardModule } from '@brightlayer-ui/angular-components/core';

import { SharedCompDocsModule } from '../../shared/shared-comp-docs.module';

import { BasicComponent } from './examples/basic.component';
import { MultiLineComponent } from './examples/multi-line.component';
import { PlaygroundComponent } from './examples/playground.component';
import { WithActionsComponent } from './examples/with-actions.component';
import { WithHeroesComponent } from './examples/with-heroes.component';
import { WithScoreBadgeComponent } from './examples/with-score-badge.component';
import { ScoreCardDocComponent } from './score-card-doc.component';

@NgModule({
  declarations: [
    ScoreCardDocComponent,
    WithScoreBadgeComponent,
    BasicComponent,
    WithHeroesComponent,
    MultiLineComponent,
    WithActionsComponent,
    PlaygroundComponent,
  ],
  imports: [
    ScoreCardModule,
    HeroModule,
    InfoListItemModule,
    MatListModule,
    SharedCompDocsModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [ScoreCardDocComponent],
})
export class ScoreCardDocModule {}
