import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './user/header/header.component';
import { BodyComponent } from './user/body/body.component';
import { DetailsComponent } from './user/body/details/details.component';
import { ListComponent } from './user/body/list/list.component';
import { ItemComponent } from './user/body/list/item/item.component';
import { OpenDropdownDirective } from './directives/open-dropdown.directive';
import {HttpService} from "./services/http.service";
import {TodoManagerService} from "./services/todo-manager.service";
import {SelectionService} from "./services/selection.service";
import {routing} from "./app.routing";
import { TodoFormComponent } from './user/todo-form/todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    WelcomeComponent,
    HeaderComponent,
    BodyComponent,
    DetailsComponent,
    ListComponent,
    ItemComponent,
    OpenDropdownDirective,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [HttpService, TodoManagerService, SelectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
