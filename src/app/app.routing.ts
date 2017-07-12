import {RouterModule, Routes} from '@angular/router';

import {UserComponent} from "./user/user.component";
import {userRoutes} from "./user/user.routing";
import {WelcomeComponent} from "./welcome/welcome.component";


const appRoutes: Routes = [
  {path: 'user', redirectTo: 'user/all' , pathMatch: 'full'},
  {path: 'user', component: UserComponent , children: userRoutes},
  {path: '' , component: WelcomeComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
