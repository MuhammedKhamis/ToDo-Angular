import {Injectable} from '@angular/core';
import {Todo} from "../classes/todo";
import 'rxjs/Rx';
import {AuthService} from "./auth.service";

@Injectable()
export class HttpService {

  constructor(private auth: AuthService) { }

  public fetchData() {
    if (this.auth.isAuth()) {
      var getUserInfo = this.auth.getUserInfo();
      return getUserInfo;
    }
    return {};
  }
  public storeDate(todos: Todo[]) {
    if (this.auth.isAuth()) {
      var user = this.auth.getUser();
      var updates = {};
      updates['/users/' + user.uid + '/todos'] =  JSON.stringify(todos);
      this.auth.update(updates);
    }
  }
}
