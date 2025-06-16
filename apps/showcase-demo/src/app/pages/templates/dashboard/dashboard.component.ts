import { Component, ViewEncapsulation } from '@angular/core';
import * as BLUIColors from '@brightlayer-ui/colors';
import {
    HeroModule,
    ChannelValueModule,
    EmptyStateModule,
    ScoreCardModule,
    InfoListItemModule,
    ListItemTagModule,
} from '@brightlayer-ui/angular-components';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
    selector: 'app-template-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'app-template-dashboard',
    },
    standalone: true,
    imports: [
        ScoreCardModule,
        MatIconModule,
        MatCardModule,
        InfoListItemModule,
        ChannelValueModule,
        HeroModule,
        ListItemTagModule,
        MatExpansionModule,
        EmptyStateModule,
    ],
})
export class DashboardComponent {
    colors = BLUIColors;
}
