import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

import { MatDatepickerInputEvent } from '@angular/material/datepicker';

type Value = number;

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateComponent),
      multi: true
    }
  ]
})
export class DateComponent implements OnInit, ControlValueAccessor {

  @Input() placeholder?: string;
  @Input() min?: Date;
  @Input() max?: Date;

  @Output() changed = new EventEmitter<Value | null>();
  @Output() closed = new EventEmitter<void>();

  value!: Value | null;
  isDisabled!: boolean;

  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};

  constructor() {

  }

  get inputValue(): Date | undefined {
    return this.value ? new Date(this.value) : undefined;
  }

  ngOnInit(): void {

  }

  writeValue(value: Value): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
      this.isDisabled = isDisabled;
  }

  onChanged(event: MatDatepickerInputEvent<Date>, ): void {
    const value = event.value ? event.value.getTime() : null;

    this.value = value;
    this.propagateChange(value);
    this.changed.emit(value);
  }

  onClosed(): void {
    this.propagateTouched();
    this.closed.emit();
  }
}
