import {RouterModule, Routes} from '@angular/router';
import {BodyComponent} from './user/body/body.component';
import {TodoFormComponent} from "./user/todo-form/todo-form.component";


const appRoutes: Routes = [
  {path: ':type', component: BodyComponent},
  {path: 'new', component: TodoFormComponent},
  {path: 'edit', component: TodoFormComponent},
  {path: '' , component: BodyComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
