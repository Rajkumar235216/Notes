import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // let note: string[];
  //  created a constant array note[] and initialized some notes name to i

   const note =  [
      'Eat Breakfast',
      'Go for a Walk',
      'Learn Angular',
      'Eat Dinner',
      'Sleep'
    ];

}
