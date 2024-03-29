import {RouterModule, Routes} from '@angular/router';

import {UserComponent} from "./user/user.component";
import {userRoutes} from "./user/user.routing";
import {WelcomeComponent} from "./welcome/welcome.component";
import {BodyGuardService} from "./services/body-guard.service";
import {WelcomeGuardService} from "./services/welcome-guard.service";


const appRoutes: Routes = [
  {path: 'user', redirectTo: 'user/all' , pathMatch: 'full'},
  {path: 'user', component: UserComponent , children: userRoutes, canActivate: [BodyGuardService]},
  {path: '' , component: WelcomeComponent , canActivate: [WelcomeGuardService]}
];

export const routing = RouterModule.forRoot(appRoutes);
