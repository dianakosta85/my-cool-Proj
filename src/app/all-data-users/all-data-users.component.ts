import { Component, OnInit, SimpleChanges ,Input , Output, EventEmitter} from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user';

@Component({
  selector: 'app-all-data-users',
  templateUrl: './all-data-users.component.html',
  styleUrls: ['./all-data-users.component.css']
})

export class AllDataUsersComponent implements OnInit {

  constructor(private data:DataService) {  } 
 
  @Input() showAll:boolean = false;
  users:User[]; 
  selectedUser:User; 
  @Output() id:EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {
    //debugger;
    if(this.data.users == null)
      this.data.getData();
  }
  
  getAllUsers() {
    //debugger;
    this.showAll = true;
    this.users = this.data.users;
    this.selectedUser = null;
  }
  getUserPerName(userName:string){

    //debugger;
    var usersTMP = this.users.filter(x=> x.name==userName);
    if(usersTMP.length > 0){
       this.selectedUser = usersTMP[0]; 
       this.id.emit(this.selectedUser.id);
    } 
  }

}
