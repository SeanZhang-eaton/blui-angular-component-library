import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  ChannelValueModule,
  EmptyStateModule,
  HeroModule,
  InfoListItemModule,
  ListItemTagModule,
  MobileStepperModule,
  ScoreCardModule,
  ThreeLinerModule,
  ToolbarMenuModule,
  UserMenuModule,
} from '@brightlayer-ui/angular-components';
import { BLUIColors } from '@brightlayer-ui/colors';

import { RtlService } from '../../../services/rtl.service';

@Component({
  selector: 'app-blui-display',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    ChannelValueModule,
    HeroModule,
    InfoListItemModule,
    ListItemTagModule,
    MobileStepperModule,
    ScoreCardModule,
    ThreeLinerModule,
    UserMenuModule,
    ToolbarMenuModule,
    EmptyStateModule,
  ],
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BluiDisplayComponent {
  colors = BLUIColors;
  userMenuOpen1 = false;
  userMenuOpen2 = false;
  userMenuOpen3 = false;
  userMenuOpen4 = false;
  userMenuOpen5 = false;

  userMenuItems = [
    {
      title: 'Settings',
      icon: 'settings',
    },
    {
      title: 'Contact Us',
      icon: 'mail',
    },
    {
      title: 'Log Out',
      icon: 'logout',
    },
  ];

  constructor(public rtl: RtlService) {}

  handleInfoListItemClick(): void {
    // eslint-disable-next-line no-console
    console.info('InfoListItem clicked');
  }
}
