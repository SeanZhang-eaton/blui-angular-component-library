import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  AppBarModule,
  HeroModule,
  InfoListItemModule,
  ScoreCardModule,
  ThreeLinerModule,
  ToolbarMenuModule,
} from '@brightlayer-ui/angular-components';
import { BLUIColors } from '@brightlayer-ui/colors';

import { RtlService } from '../../../services/rtl.service';

@Component({
  selector: 'app-blui-surfaces',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    ScoreCardModule,
    AppBarModule,
    ThreeLinerModule,
    ToolbarMenuModule,
    MatToolbarModule,
    MatIconModule,
    InfoListItemModule,
    HeroModule,
    MatButtonModule,
  ],
  templateUrl: './surfaces.component.html',
  styleUrls: ['./surfaces.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BluiSurfacesComponent {
  colors = BLUIColors;
  isDynamicCollapsed = false;
  subtitle1 = 'No Icon';
  subtitle2 = 'Item 1';
  subtitle3 = 'Custom Menu';
  subtitle4 = 'Item 1';
  subtitle5 = 'With a title';
  loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vulputate arcu, quis vulputate mauris aliquet in. Praesent sollicitudin erat at augue cursus, a scelerisque odio tristique. Aenean quis dui in nisi condimentum viverra eleifend sed odio. Vestibulum a lacinia leo. Proin congue purus vulputate metus vestibulum eleifend. Suspendisse sit amet orci magna. Suspendisse eu odio ut purus ultrices ornare id eu dolor. Cras porttitor semper feugiat. Sed vel ultricies risus, vel dignissim arcu. Vestibulum quis interdum sem. Morbi bibendum tortor ligula, non pellentesque ante ullamcorper sed. Duis ornare felis eget justo faucibus, id tristique felis dignissim. Nullam sapien metus, feugiat egestas convallis eu, vehicula et turpis. Phasellus interdum, justo sit amet maximus pellentesque, eros orci dictum diam, id bibendum risus neque non risus.`;
  actions = ['search', 'mail', 'more_vert'];
  constructor(public rtl: RtlService) {}
}
