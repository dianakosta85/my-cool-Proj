import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { FormsModule,FormControl,FormBuilder,Validators } from '@angular/forms';
import { User } from '../user';
import { Post } from '../post';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  constructor(private route:ActivatedRoute,private data:DataService) { }
  getUserId:number;
  private sub:any;
  selectedUser:User;
  //newPost:Post;
  showForm:boolean=true;
  updateMsg:boolean=false;
  deleteMsg:boolean=false;
  newUser:boolean=false;
  
  ngOnInit() {
      //debugger;
      this.sub = this.route.params.subscribe(params=>{this.getUserId = params['id']});
      this.selectedUser = this.data.getUserDataPerId(this.getUserId);
     /* if(this.newPost == null){
        this.newPost={"userId":0,"title":"","body":""};
      }*/
      


      if(this.selectedUser == null){
          this.selectedUser={
            "id": 0,
            "name": "",
            "username": "",
            "email": "",
            "address": {
              "street": "",
              "suite": "",
              "city": "",
              "zipcode": "",
              "geo": {
                "lat": "",
                "lng": ""
              }
            },
            "phone": "",
            "website": "",
            "company": {
              "name": "",
              "catchPhrase": "",
              "bs": ""
            }
          };
          this.newUser = true;
      }else 
          this.data.getPostByUser(this.getUserId); 
  }
  submitForm(form: NgForm){
   debugger; 
    if(this.newUser){
      if (form.invalid) {
        return;
      }
      this.data.createUser(this.selectedUser); 
      this.newUser = false;
    }else
      this.data.editUserData(this.selectedUser);
      this.showForm = false;
      this.updateMsg = true;
  }
  deleteUser(){
    this.data.deleteUser(this.selectedUser);
    this.showForm = false;
    this.deleteMsg = true;
  }
}
