import { Component } from '@angular/core';
import { CustomPipePipe } from '../pipe/custom-pipe.pipe';
import { JsonPipe } from '@angular/common';
import { CustomAttributeDirectiveDirective } from '../directives/custom-attribute-directive.directive';
import { CustomStructuralDirectiveDirective } from '../directives/custom-structural-directive.directive';

@Component({
  selector: 'app-pipe-and-directive',
  standalone: true,
  imports: [CustomPipePipe, JsonPipe, CustomAttributeDirectiveDirective, CustomStructuralDirectiveDirective],
  templateUrl: './pipe-and-directive.component.html',
  styleUrl: './pipe-and-directive.component.css'
})
export class PipeAndDirectiveComponent {
  MyObject = {
    id: 1,
    name: 'John Doe',
    age: 25,
    gender: 'Male',
    email: 'Jhon@gmeil.com',
    phone: '1234567890',
    address: '123 Main St',
    city: 'City',
    state: 'State'
  };
}
