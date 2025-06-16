import { AfterViewInit, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import * as BLUIColors from '@brightlayer-ui/colors';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { InfoListItemModule, ListItemTagModule } from '@brightlayer-ui/angular-components';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-template-alarms',
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        MatListModule,
        MatDividerModule,
        InfoListItemModule,
        ListItemTagModule,
        MatFormFieldModule,
        FormsModule,
        MatIconModule,
    ],
    templateUrl: './alarms.component.html',
    styleUrls: ['./alarms.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'app-template-alarms',
    },
})
export class AlarmsComponent implements AfterViewInit {
    colors = BLUIColors;

    constructor(
        private readonly _ref: ChangeDetectorRef,
        private readonly _themeService: ThemeService
    ) {}

    ngAfterViewInit(): void {
        this._ref.detectChanges();
    }

    isDark(): boolean {
        return this._themeService.isDarkMode;
    }
}
