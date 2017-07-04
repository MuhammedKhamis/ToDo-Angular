import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../../classes/todo";
import {TodoManagerService} from "../../../services/todo-manager.service";
import {SelectionService} from "../../../services/selection.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() private todos: Todo[];
  constructor(private selection: SelectionService) { }

  ngOnInit() {
  }
  setSelected(todo: Todo) {
    this.selection.selectedTodo = todo;
  }

}
