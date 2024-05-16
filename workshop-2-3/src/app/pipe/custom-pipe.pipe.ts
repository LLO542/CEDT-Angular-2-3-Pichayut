import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  standalone: true
})
export class CustomPipePipe implements PipeTransform {

  transform(value: model, ...args: unknown[]): unknown {
    return 'My name is ' + value.name + ' and I am ' + value.age + ' years old. I am a ' + value.gender + ' and my email is ' + value.email + '. You can reach me at ' + value.phone + ' or visit me at ' + value.address + ', ' + value.city + ', ' + value.state + '.';
  }

}

class model {
  id!: number;
  name!: string;
  age!: number;
  gender!: string;
  email!: string;
  phone!: string;
  address!: string;
  city!: string;
  state!: string;
}
