import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Models/Todo';
import { TodosService } from '../../Services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  constructor(private myTodos: TodosService) { 
  }
  ngOnInit() {//.subscribe is similar to .then
    this.myTodos.getTodos().subscribe(todos =>{
      this.todos = todos;
    });
  }

}