import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-demographic-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './demographic-page.component.html',
  styleUrl: './demographic-page.component.css'
})
export class DemographicPageComponent {
  demographicGroup: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(99)]),
    sex: new FormControl('', [Validators.required, Validators.pattern(/^(male|female|other)$/)]),
  });
}
