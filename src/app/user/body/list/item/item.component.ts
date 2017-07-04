import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../../../classes/todo";
import {SelectionService} from "../../../../services/selection.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() currentTodo: Todo;
  constructor() { }

  ngOnInit() {

  }

}
