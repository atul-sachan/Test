import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from "./04. Forms/template-form.component";
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './08. todos/todos.component';
import { UserDetailsComponent } from './09. user-details/user-details.component';
import { VoterComponent } from './07. voter/voter.component';

import { routes } from './app.routes';
import { UsersComponent } from './users/users.component';
// import { NavComponent } from './nav/nav.component';
import { HighlightDirective } from './highlight.directive';
import { DataService } from "./http-services/data.service";

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    HomeComponent,
    TodosComponent,
    UserDetailsComponent,
    VoterComponent,
    UsersComponent,
    //  NavComponent,
    HighlightDirective
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
