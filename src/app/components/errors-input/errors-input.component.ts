import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-errors-input',
  templateUrl: './errors-input.component.html',
  styleUrls: ['./errors-input.component.scss'],
})
export class ErrorsInputComponent implements OnInit {
  @Input() form: FormGroup | NgForm;
  @Input() field: string;
  @Input() requiredMsg = 'É necessário preencher este campo.';
  @Input() minValueMsg = 'Valor menor do que o permitido.';
  @Input() maxValueMsg = 'Valor acima do permitido.';

  constructor() {}

  ngOnInit() {}
}
