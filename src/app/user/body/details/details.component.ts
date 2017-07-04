import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Todo} from "../../../classes/todo";
import {SelectionService} from "../../../services/selection.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit , OnChanges  {

  private selectedTodo: Todo;
  private types = ['Doing', 'Done', 'Archived'];
  constructor(private selection: SelectionService) { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.selectedTodo = this.selection.selectedTodo;
  }

  cancel(){
    this.selection.selectedTodo = null;
  }
  delete(){
   //ToDo
    console.log('item Deleted');
  }
  edit(){
    //ToDo
    console.log('item edited');
  }
  changeType(type: string){
    //ToDo
    console.log('item changed to ' + type );
  }

}
