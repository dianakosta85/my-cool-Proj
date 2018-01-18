import { Component, OnInit,ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user';
import { AllDataUsersComponent } from '../all-data-users/all-data-users.component';


@Component({
  selector: 'app-parent-user-tabs',
  templateUrl: './parent-user-tabs.component.html',
  styleUrls: ['./parent-user-tabs.component.css']
})
export class ParentUserTabsComponent implements OnInit {

  id:number=1;
  constructor() { }

  ngOnInit() {
  }

  onUpdateUser(id:number):void{
      this.id = id;
  }
  @ViewChild(AllDataUsersComponent) child:AllDataUsersComponent;

  getAllUsers() {
    // child is set
    this.child.getAllUsers();
  }
}
