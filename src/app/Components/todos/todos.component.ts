import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id:1,
        title:'clean my room',
        completed:false
      },
      {
        id: 2,
        title: 'take a shower',
        completed: true
      },
      {
        id: 3,
        title: 'Code',
        completed: false
      }
    ]
  }

}
