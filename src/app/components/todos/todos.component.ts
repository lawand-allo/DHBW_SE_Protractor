 import { Component, OnInit } from '@angular/core';
 import {Todo} from '../../models/Todo';
 @Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  inputTodo = '';
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id: 0,
        name: 'Einkaufen',
        completed: true
      },
      {
        id: 1,
        name: 'Wäsche waschen',
        completed: false
      }
    ];
  }
  onToggleDone(id): void{
    const foundTodo = this.todos.find(todo => todo.id === id);
    const todoIndex = this.todos.indexOf(foundTodo);
    this.todos[todoIndex].completed = ! this.todos[todoIndex].completed;
  }
  onAdd(): void {
    this.todos.push({name: this.inputTodo, id: this.todos.length, completed: false});
    this.inputTodo = '';
  }
  onRemove(id): void{
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

}
