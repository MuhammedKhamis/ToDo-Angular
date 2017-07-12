import {Routes} from "@angular/router";
import {TodoFormComponent} from "./todo-form/todo-form.component";
import {BodyComponent} from "./body/body.component";


export const userRoutes: Routes = [
  {path: 'new', component: TodoFormComponent},
  {path: 'edit', component: TodoFormComponent},
  {path: ':type', component: BodyComponent},
  {path: 'all', component: BodyComponent}
];
