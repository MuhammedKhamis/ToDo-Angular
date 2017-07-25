import {Component, OnDestroy} from '@angular/core';
import {Todo} from "../../classes/todo";
import {Form} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {TodoManagerService} from "../../services/todo-manager.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnDestroy {
  private defaultTodo: Todo;
  private oldTodo: Todo;
  private subscription: Subscription;
  private types;
  private add: boolean;
  constructor(private activatedRoute: ActivatedRoute, private todoManager: TodoManagerService,
  private router: Router, private auth: AuthService) {
    this.types = todoManager.types;
    this.subscription = activatedRoute.queryParams.subscribe(
      (params: any) => {
        if(params['title']) {
          this.defaultTodo = this.todoManager.clone(params);
          this.oldTodo = this.todoManager.clone(this.defaultTodo);
          this.add = false;
        }else{
          this.defaultTodo = {title:'',details: '',type: 'Doing' ,imagePath: ''};
          this.add = true;
        }
      }
    );

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onSubmit(form: Form) {
    if (this.auth.isAuth()) {
        if (this.add) {
          this.todoManager.addTodo(this.defaultTodo);
        } else {
          this.todoManager.modifyTodo(this.oldTodo, this.defaultTodo);
        }
      this.router.navigate(['user']);
    }
  }
}
