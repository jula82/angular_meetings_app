import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './input/input.module';
import { FormFieldModule } from './form-field/form-field.module';
import { SelectModule } from './select/select.module';
import { CheckboxesModule } from './checkboxes/checkboxes.module';
import { DateModule } from './date/date.module';
import { DateRangeModule } from './date-range/date-range.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputModule,
    FormFieldModule,
    SelectModule,
    CheckboxesModule,
    DateModule,
    DateRangeModule
  ],
  exports: [
    InputModule,
    FormFieldModule,
    SelectModule,
    CheckboxesModule,
    DateModule,
    DateRangeModule
  ]
})
export class ControlsModule { }
