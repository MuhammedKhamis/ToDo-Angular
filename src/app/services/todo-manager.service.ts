import {EventEmitter, Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {Todo} from "../classes/todo";

@Injectable()
export class TodoManagerService {

  private _types: string[] = ['Doing', 'Done', 'Archived'];
  private todos: Todo[] = [new Todo("First", "First to make", "Doing", "https://lh4.ggpht.com/pGkxYOxcBuN-7m5wh0pPGJYI5OvFoWhFW1h0TCmuWa5DV_H-v7tTr7-JJFACPBUQbqQ=w300"),
    new Todo("Second", "Second to make", "Done", "https://lh4.ggpht.com/pGkxYOxcBuN-7m5wh0pPGJYI5OvFoWhFW1h0TCmuWa5DV_H-v7tTr7-JJFACPBUQbqQ=w300")
  ];

  constructor(private httpService: HttpService) {
    //ToDo
  }

  public getData(){
    return this.todos;
  }
  public addTodo(todo: Todo) {
    this.todos.push(todo);
    this.httpService.storeDate();
  }
  public getDataByType(type: string) {
    const tmp = [];
    for (let i = 0 ; i < this.todos.length ; i++) {
      if (type === this.todos[i].type) {
        tmp.push(this.todos[i]);
      }
    }
    return tmp;
  }
  public modifyTodo(oldTodo: Todo , newTodo: Todo){
    this.todos.splice(this.todos.indexOf(oldTodo), 1);
    this.addTodo(newTodo);
  }
  public deleteTodo(oldTodo: Todo){
    this.todos.splice(this.todos.indexOf(oldTodo), 1);
    this.httpService.storeDate();
  }

  get types(): string[] {
    return this._types;
  }
}
