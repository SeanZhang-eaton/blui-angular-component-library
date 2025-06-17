import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MobileStepperModule } from '@brightlayer-ui/angular-components';

@Component({
  selector: 'app-blui-navigation',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MobileStepperModule, MatButtonModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BluiNavigationComponent {
  mobileStepperStep = 0;
}
