import { Injectable } from '@angular/core';
import {Todo} from './model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos = [
      new Todo('lundi', 'aller bosser')
    ];
  }
  getTodos(): Todo[] {
    return this.todos;
  }
  logger() {
    console.log(this.todos);
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    } else {
    alert('Todo innexistant');
    }
  }
}
