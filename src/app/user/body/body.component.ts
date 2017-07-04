import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {Todo} from "../../classes/todo";
import {TodoManagerService} from "../../services/todo-manager.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit , OnDestroy {

  private subscription: Subscription;
 // private subscription2: Subscription;
  private todos: Todo[]=[];
  constructor(private todoManager: TodoManagerService, private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(
      (data: any) => {this.updateTodos(data['type']);
        console.log(this.activatedRoute.params);
      }
    );
    //this.subscription2 = todoManager
  }

  private updateTodos(type: string){
    if (type) {
      this.todos = this.todoManager.getDataByType(type);
    }else{
      this.todos = this.todoManager.getData();
    }
  }
  ngOnDestroy() {
    //this.subscription2.unsubscribe();
    this.subscription.unsubscribe();
  }
  ngOnInit() {
  }

}
