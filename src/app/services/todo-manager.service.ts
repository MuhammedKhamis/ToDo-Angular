import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {Todo} from "../classes/todo";

@Injectable()
export class TodoManagerService {

  private todos: Todo[];
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
  public getDataByType(type: number){
    const tmp = [];
    for (let i = 0 ; i < this.todos.length ; i++){
      if (type === this.todos[i].type) {
        tmp.push(this.todos[i]);
      }
    }
    return tmp;
  }
  public modifyTodo(oldTodo: Todo , newTodo: Todo){
    this.todos.splice(this.todos.indexOf(oldTodo),1);
    this.addTodo(newTodo);
  }
}
