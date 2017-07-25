import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {Todo} from "../classes/todo";
import {AuthService} from "./auth.service";


@Injectable()
export class TodoManagerService {

  private _types: string[] = ['Doing', 'Done', 'Archived'];
  private todos: Todo[] = [];

  constructor(private httpService: HttpService, private auth: AuthService) { }

  public getData(): Todo[] {
     return this.todos;
  }

  public fetchData() {
    return this.httpService.fetchData();
  }
  public addTodo(todo: Todo) {
    this.todos.push(todo);
    this.httpService.storeDate(this.todos);

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
  public modifyTodo(oldTodo: Todo , newTodo: Todo) {
    this.todos.splice(this.todos.indexOf(oldTodo), 1);
    this.addTodo(newTodo);
  }
  public deleteTodo(oldTodo: Todo){
    this.todos.splice(this.todos.indexOf(oldTodo), 1);
    this.httpService.storeDate(this.todos);
  }

  public convert(response){
    this.todos = JSON.parse(response);
  }
  public clone(value: Todo){
    return Object.assign({}, value);
  }

  get types(): string[] {
    return this._types;
  }
}
