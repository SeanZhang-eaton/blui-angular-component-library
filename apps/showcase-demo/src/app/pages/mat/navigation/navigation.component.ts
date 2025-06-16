import { Component, ViewEncapsulation } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepper, MatStep, MatStepLabel, MatStepperNext, MatStepperPrevious } from '@angular/material/stepper';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-mat-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
        MatButton,
        MatMenuTrigger,
        MatMenu,
        MatMenuItem,
        MatTabGroup,
        MatTab,
        MatStepper,
        MatStep,
        ReactiveFormsModule,
        MatStepLabel,
        MatFormField,
        MatInput,
        MatStepperNext,
        MatStepperPrevious,
    ],
})
export class MatNavigationComponent {}
