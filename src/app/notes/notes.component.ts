import { Component, OnInit } from '@angular/core';
import {NOTE} from '../app.component'
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
// imported class NOTE from app.component and initialize it in here.
  constructor() { }
  notes = NOTE;


  ngOnInit() {
  }

}
