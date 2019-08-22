import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
import {Todo} from '../model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  todo: Todo;
  constructor(private todoService: TodoService) { }
  ngOnInit() {
    this.todos = this.todoService.getTodos();
    this.todo = new Todo();
  }
  delete(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

  ajout() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }

}
