import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ControlItem } from '@app/models/frontend/control-item';
import { regex, regexErrors } from '@app/shared/utils/regex';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  form!: FormGroup;
  regexErrors = regexErrors;

  items!: ControlItem[];
  showSpinner = false;

  constructor(private fb: FormBuilder) {
    this.items = [
      { label: 'First', value: 1},
      { label: 'Second', value: 2},
      { label: 'Third', value: 3},
    ]
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: ['', {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(regex.email)
        ]
      }],
      select: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      checkboxes: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      date: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }],
      dateRange: [null, {
        updateOn: 'change', validators: [
          Validators.required
        ]
      }]
    })
  }

  onPatchValue(): void {
    this.form.patchValue({input: 'test'});
  }

  onSubmit(): void {
    console.log('submit');
  }

  getForm(): void {
    console.log(this.form);
  }

  onToggleSpinner(): void {
    this.showSpinner = !this.showSpinner;
  }

}
