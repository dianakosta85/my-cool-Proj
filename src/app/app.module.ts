import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import {HttpModule,JsonpModule} from '@angular/http';
import{DalServiceService} from './dal-service.service';
import{DataService} from './data.service';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




import { AppComponent } from './app.component';
import { AllDataUsersComponent } from './all-data-users/all-data-users.component';
import { UserDataComponent } from './user-data/user-data.component';
import { Component } from '@angular/core/src/metadata/directives';
import { PostsChildComponent } from './posts-child/posts-child.component';
import { ParentUserTabsComponent } from './parent-user-tabs/parent-user-tabs.component';


const appRoutes: Routes=[
  {path:'users',component:ParentUserTabsComponent,
    children:[
          {path:'allData',component:AllDataUsersComponent},
          {path:'userData/:id',component:UserDataComponent},
          {path:'addUser',component:UserDataComponent}
    ]},
  {path:'posts',component:PostsChildComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AllDataUsersComponent,
    UserDataComponent,
    PostsChildComponent,
    ParentUserTabsComponent
  ],
  imports: [HttpModule,JsonpModule,FormsModule,ReactiveFormsModule,
    BrowserModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [DalServiceService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
