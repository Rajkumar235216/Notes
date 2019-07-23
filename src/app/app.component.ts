import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

//  created a constant array note[] and initialized some notes name to it
export const NOTE :note[]=[
  { id : 1 , name : 'Eat Breakfast'},
  { id : 2 , name : 'Go for a Walk'},
  { id : 3 , name : 'Learn Angular'},
  { id : 4 , name : 'Eat Dinner'},
  { id : 5 , name : 'Sleep'}
];
