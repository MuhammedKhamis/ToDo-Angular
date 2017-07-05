import {RouterModule, Routes} from '@angular/router';
import {BodyComponent} from './user/body/body.component';
import {TodoFormComponent} from "./user/todo-form/todo-form.component";
import {BodyGuardService} from "./services/body-guard.service";


const appRoutes: Routes = [
  {path: 'new', component: TodoFormComponent},
  {path: 'edit', component: TodoFormComponent},
  {path: ':type', component: BodyComponent},
  {path: '' , component: BodyComponent, canActivate: [BodyGuardService]}
];

export const routing = RouterModule.forRoot(appRoutes);
