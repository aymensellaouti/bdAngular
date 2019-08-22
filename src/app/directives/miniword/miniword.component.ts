import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../todo.service';

@Component({
  selector: 'app-miniword',
  templateUrl: './miniword.component.html',
  styleUrls: ['./miniword.component.css'],
  providers: [TodoService]
})
export class MiniwordComponent implements OnInit {
  color = 'red';
  font = 'Arial';
  size = 14;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
  loggerTodo() {
    this.todoService.logger();
  }

}
