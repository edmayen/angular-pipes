import { Component } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';

  name = "Eduardo"
  name2 = "eduardo mayen PanTaleOn"

  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  a: number = 0.234;

  salary: number = 1234.5;

  hero = {
    name: "Bruce",
    alias: "Batman",
    age: 45,
    jl: {
      flash: "Barry Allen",
      greenArrow: "Oliver Queen",
      wonderWoman: "Diana Prince"
    }
  }

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('Llego la data!'), 3500);
  })

  date = new Date();

  video = 'UUyJoojCLnc';

  activar: boolean = true;
}
