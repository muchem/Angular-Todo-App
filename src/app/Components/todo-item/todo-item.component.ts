import { Component, OnInit,Input } from '@angular/core';
import { Todo } from '../../Models/Todo';
import { TodosService } from '../../Services/todos.service';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  constructor() { }

  ngOnInit() {
  }
  //set dynamic classes
  setClasses(){
    let classess = {
      todo:true,
      'is-complete':this.todo.completed 
    }
    return classess
    }
    onToggle(todo){
      this.todo.completed = !this.todo.completed;
    }
    remove(todo){

    }

}
