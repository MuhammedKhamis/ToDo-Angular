import {EventEmitter, Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Todo} from "../classes/todo";
import 'rxjs/Rx';
import {AuthService} from "./auth.service";

@Injectable()
export class HttpService {

  constructor(private http: Http, private auth: AuthService) { }

  public fetchData() {
    console.log("from http");
    console.log(this.auth.isAuth());
    return this.http.get('https://to-do-5249f.firebaseio.com/data.json')
      .map((response: Response) => response.json());
  }
  public storeDate(todos: Todo[]) {
    const body = JSON.stringify(todos);
    return this.http.put('https://to-do-5249f.firebaseio.com/data.json', body)
      .map((response: Response) => (response.json()));
  }
}
