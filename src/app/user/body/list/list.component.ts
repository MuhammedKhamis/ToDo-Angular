import { Component, OnInit } from '@angular/core';
import {Todo} from "../../../classes/todo";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private todos: Todo[];
  constructor() { }

  ngOnInit() {
  }

}
