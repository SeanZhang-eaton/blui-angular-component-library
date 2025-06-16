import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MobileStepperModule } from '@brightlayer-ui/angular-components';
import { MatButtonModule } from '@angular/material/button';

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
