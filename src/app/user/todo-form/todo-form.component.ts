import {Component, OnDestroy, OnInit} from '@angular/core';
import {Todo} from "../../classes/todo";
import {Form} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {TodoManagerService} from "../../services/todo-manager.service";

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
  constructor(private activatedRoute: ActivatedRoute, private todoManager: TodoManagerService) {
    this.types = todoManager.types;
    this.subscription = activatedRoute.queryParams.subscribe(
      (params: any) => {
        if(params['title']) {
          this.defaultTodo = new Todo(params['title'],params['details'],params['type'],params['imagePath']);
          this.oldTodo = this.defaultTodo.clone();
          this.add = true;
        }else{
          this.defaultTodo = new Todo('', '', 'Doing' , '');
          this.add = false;
        }
      }
    );

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onSubmit(form: Form){
    if(this.add){
     //this.todoManager.addTodo(this.defaultTodo);
    }else{
      //this.todoManager.modifyTodo(this.defaultTodo, this.oldTodo);
    }
  }

}
