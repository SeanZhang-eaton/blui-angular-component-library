import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroupDirective, NgForm, ReactiveFormsModule, UntypedFormControl, Validators } from '@angular/forms';
import {
  MatAnchor,
  MatButton,
  MatFabAnchor,
  MatFabButton,
  MatIconButton,
  MatMiniFabAnchor,
  MatMiniFabButton,
} from '@angular/material/button';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatCheckbox } from '@angular/material/checkbox';
import { ErrorStateMatcher, MatOption, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatError, MatFormField, MatHint, MatLabel, MatPrefix, MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatSelect } from '@angular/material/select';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';

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
