import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {Todo} from "../classes/todo";

@Injectable()
export class TodoManagerService {

  private _types: string[] = ['Doing', 'Done', 'Archived'];
  private todos: Todo[] = [];

  constructor(private httpService: HttpService) { }

  public getData(): Todo[] {
     return this.todos;
  }

  public fetchData(){
    return this.httpService.fetchData();
  }
  public addTodo(todo: Todo) {
    this.todos.push(todo);
    return this.httpService.storeDate(this.todos);

  }

  public getDataByType(type: string) {
    if (type === 'all') {
      return this.getData();
    }
    const tmp = [];
    for (let i = 0 ; i < this.todos.length ; i++) {
      if (type === this.todos[i].type) {
        tmp.push(this.todos[i]);
      }
    }
    return tmp;
  }
  public modifyTodo(oldTodo: Todo , newTodo: Todo){
    console.log(this.todos.indexOf(oldTodo));
    this.todos.splice(this.todos.indexOf(oldTodo), 1);
    return this.addTodo(newTodo);
  }
  public deleteTodo(oldTodo: Todo){
    this.todos.splice(this.todos.indexOf(oldTodo), 1);
    return this.httpService.storeDate(this.todos);
  }

  public convert(response){
    const tmp = [];
    for (let i in response){
      tmp.push(response[i]);
    }
    this.todos = tmp;
  }
  public clone(value: Todo){
    return Object.assign({}, value);
  }

  get types(): string[] {
    return this._types;
  }
}
