import {EventEmitter, Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {Todo} from "../classes/todo";

@Injectable()
export class TodoManagerService {

  event: EventEmitter<Todo[]> = new EventEmitter<Todo[]>();
  private _types: string[] = ['Doing', 'Done', 'Archived'];
  private todos: Todo[]=[];

  constructor(private httpService: HttpService) {
    this.httpService.fetchData().subscribe(
      response => {
        const tmp = [];
        for( let i in response){
          tmp.push(new Todo(response[i]['_title'],response[i]['_details'],response[i]['_type'],response[i]['_imagePath']));
        }
        this.todos = tmp;
      }
    );
  }

  public getData(): any{
    return this.todos;
  }
  public addTodo(todo: Todo) {
    //this.todos.push(todo);
    this.httpService.storeDate(this.todos).subscribe(
      (response: Todo[]) => {
        this.todos = response;
      }
    );
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
    //this.todos.splice(this.todos.indexOf(oldTodo), 1);
    this.httpService.storeDate(this.todos).subscribe(
      (response: Todo[]) => {
        this.todos = response;
      }
    );
  }

  get types(): string[] {
    return this._types;
  }
}
