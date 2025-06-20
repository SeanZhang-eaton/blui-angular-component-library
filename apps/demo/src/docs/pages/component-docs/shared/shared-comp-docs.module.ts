import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, SecurityContext } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';

import { ColorPickerModule } from 'ngx-color-picker';
import { MarkdownModule, MARKED_OPTIONS } from 'ngx-markdown';

import 'marked/marked.min.js';

import { AppCommonComponentsModule } from '../../../components/components.module';

import { CopyCodeButtonComponent } from './buttons/copy-code-button/copy-code-button.component';
import { ToggleCodeButtonComponent } from './buttons/toggle-code-button/toggle-code-button.component';
import { ViewCodeButtonComponent } from './buttons/view-code-button/view-code-button.component';
import { ExampleCodeComponent } from './example-code/example-code.component';
import { KnobBooleanComponent } from './knobs/knob-boolean.component';
import { KnobColorComponent } from './knobs/knob-color.component';
import { KnobNumberComponent } from './knobs/knob-number.component';
import { KnobSelectComponent } from './knobs/knob-select.component';
import { KnobTextComponent } from './knobs/knob-text.component';
import { ScaffoldComponent } from './scaffold/scaffold.component';

@NgModule({
  declarations: [
    KnobTextComponent,
    ScaffoldComponent,
    ViewCodeButtonComponent,
    ToggleCodeButtonComponent,
    ExampleCodeComponent,
    CopyCodeButtonComponent,
    KnobBooleanComponent,
    KnobColorComponent,
    KnobSelectComponent,
    KnobNumberComponent,
  ],
  imports: [
    CommonModule,
    AppCommonComponentsModule,
    ColorPickerModule,
    MatIconModule,
    MatCheckboxModule,
    MatExpansionModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSliderModule,
    OverlayModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    MarkdownModule.forRoot({
      loader: HttpClientModule,
      sanitize: SecurityContext.NONE,
      markedOptions: {
        provide: MARKED_OPTIONS,
        useValue: {
          gfm: true,
          breaks: false,
          pedantic: false,
          smartLists: true,
          smartypants: false,
        },
      },
    }),
    MatDividerModule,
    ReactiveFormsModule,
  ],
  exports: [
    ExampleCodeComponent,
    ToggleCodeButtonComponent,
    AppCommonComponentsModule,
    KnobTextComponent,
    ScaffoldComponent,
    ViewCodeButtonComponent,
    MarkdownModule,
    MatButtonModule,
    CommonModule,
    CopyCodeButtonComponent,
    KnobBooleanComponent,
    KnobColorComponent,
    KnobSelectComponent,
    KnobNumberComponent,
  ],
})
export class SharedCompDocsModule {}
