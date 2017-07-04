import {EventEmitter, Injectable} from '@angular/core';
import {Todo} from "../classes/todo";

@Injectable()
export class SelectionService {

  private _event: EventEmitter<Todo> = new EventEmitter<Todo>();
  private _selectedTodo: Todo;
  constructor() {

  }
  set selectedTodo(value: Todo) {
    this._selectedTodo = value;
    this._event.emit(value);
  }

  get event(): EventEmitter<Todo> {
    return this._event;
  }
}
