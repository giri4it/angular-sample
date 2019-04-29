import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  appStatus = false
  personArray = Array()
  user = {}

  constructor( ){

    this.personArray.push(new Person('Raju', 23, new Date('01/01/1987')))
    this.personArray.push(new Person('Ram', 43, new Date('01/01/1967')))
    this.personArray.push(new Person('Sita', 28, new Date('01/01/1977')))
    this.personArray.push(new Person('Siva', 73, new Date('01/01/1997')))
  }

}

class Person{
  constructor(
    public name: String,
    public age: number,
    public dob: Date){

  }
}
