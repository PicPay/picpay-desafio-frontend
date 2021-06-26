import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { AbstractControl, NgForm } from '@angular/forms';
import { GETERROS } from './ERRORS';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.scss']
})
export class ErrorDisplayComponent implements AfterViewInit {
  @Input() name!: string;

  control!: AbstractControl | null;

  constructor(
    private ngForm: NgForm
  ) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.control = this.ngForm.form.get(this.name);
    });
  }

  get message() {
    return this.control ? GETERROS(this.control) : null;
  }

  get submitted() {
    return this.ngForm && this.ngForm.submitted;
  }

}
