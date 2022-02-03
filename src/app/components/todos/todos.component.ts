import { Todo } from './../../models/todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos!: Todo[];
  inputTodo: string = '';

  constructor() {
    this.todos = [
      {
        content: 'first todo',
        completed: false,
      },
      {
        content: 'second todo',
        completed: true,
      },
    ];
  }

  ngOnInit(): void {}

  // Toggle Todo Completed Or Not
  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) {
        v.completed = !v.completed;
      }
    });
  }

  // Delete Todo
  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  // Add Todo
  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = '';
  }
}
