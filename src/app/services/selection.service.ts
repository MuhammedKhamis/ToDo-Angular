import { Injectable} from '@angular/core';
import {Todo} from "../classes/todo";

@Injectable()
export class SelectionService {

  private _selectedTodo: Todo;
  constructor() { }


  get selectedTodo(): Todo {
    return this._selectedTodo;
  }

  set selectedTodo(value: Todo) {
    this._selectedTodo = value;
  }
}
