import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Todo} from "../../../classes/todo";
import {SelectionService} from "../../../services/selection.service";
import {Subscription} from "rxjs/Subscription";
import {TodoManagerService} from "../../../services/todo-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  private selectedTodo: Todo;
  private types: string[];
  private subscription: Subscription;
  constructor(private selection: SelectionService, private todoManager: TodoManagerService, private router: Router) {
    this.types = todoManager.types;
  }

  ngOnInit() {
    this.subscription = this.selection.event.subscribe(
      (value: Todo) => {
        this.selectedTodo = value;
      }
    );
  }

  cancel(){
    this.selection.selectedTodo = null;
  }
  delete(){
   if (confirm('Are you sure ?') ) {
     this.todoManager.deleteTodo(this.selectedTodo);
     this.selection.selectedTodo = null;
   }
  }

  edit(){
    //ToDo
    this.router.navigate(['edit'], {queryParams:
      {'title' : this.selectedTodo.title,
        'details' : this.selectedTodo.details,
        'type' : this.selectedTodo.type,
        'imagePath' : this.selectedTodo.imagePath
      }
    });
    console.log('item edited');
  }
  changeType(type: string){
    const tmp = this.selectedTodo.clone();
    tmp.type = type;
    this.todoManager.modifyTodo(this.selectedTodo, tmp);
    this.selection.selectedTodo = null;
    console.log('item changed to ' + type );
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
