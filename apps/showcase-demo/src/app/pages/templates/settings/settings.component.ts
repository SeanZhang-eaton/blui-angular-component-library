import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { InfoListItemModule } from '@brightlayer-ui/angular-components';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
    selector: 'app-template-settings',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        InfoListItemModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatSlideToggleModule,
    ],
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'app-template-settings',
    },
})
export class SettingsComponent {
    notifications = true;
    textNotifications = true;
    autoLogout = true;
    nickname = 'Marsh Mellow';
}
