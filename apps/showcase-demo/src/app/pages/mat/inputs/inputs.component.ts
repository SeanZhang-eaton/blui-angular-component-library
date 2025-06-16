import { Component, ViewEncapsulation } from '@angular/core';
import { UntypedFormControl, FormGroupDirective, NgForm, Validators, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher, MatOption, provideNativeDateAdapter } from '@angular/material/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';
import { MatSelect } from '@angular/material/select';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatSuffix, MatLabel, MatHint, MatError, MatPrefix } from '@angular/material/form-field';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatButtonToggleGroup, MatButtonToggle } from '@angular/material/button-toggle';
import { MatIcon } from '@angular/material/icon';
import {
    MatButton,
    MatAnchor,
    MatIconButton,
    MatMiniFabButton,
    MatMiniFabAnchor,
    MatFabButton,
    MatFabAnchor,
} from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';

export class AlwaysErrorState implements ErrorStateMatcher {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return true;
    }
}

@Component({
    selector: 'app-mat-inputs',
    templateUrl: './inputs.component.html',
    styleUrls: ['./inputs.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    providers: [provideNativeDateAdapter()],
    imports: [
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
        MatButton,
        MatAnchor,
        MatIcon,
        MatIconButton,
        MatMiniFabButton,
        MatMiniFabAnchor,
        MatFabButton,
        MatFabAnchor,
        MatButtonToggleGroup,
        MatButtonToggle,
        MatCheckbox,
        MatRadioGroup,
        MatRadioButton,
        MatFormField,
        MatInput,
        MatDatepickerInput,
        MatDatepickerToggle,
        MatSuffix,
        MatDatepicker,
        MatLabel,
        MatHint,
        MatSelect,
        MatOption,
        ReactiveFormsModule,
        MatError,
        MatSlider,
        MatSliderThumb,
        MatSlideToggle,
        MatPrefix,
    ],
})
export class MatInputsComponent {
    errorMatcher = new AlwaysErrorState();
    errorControl: UntypedFormControl = new UntypedFormControl('', [Validators.required]);
}
