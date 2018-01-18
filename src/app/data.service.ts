import{DalServiceService} from './dal-service.service';
import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { error } from 'util';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'; 
import { User } from './user';
import { Post } from './post';

@Injectable()
export class DataService {
    
    constructor(private srvData:DalServiceService) {}
    users:User[];  
    posts:Post[]; 
    
  
    getData(){
        return this.srvData.getData().subscribe(data=>this.users=data,error=>console.log(error),()=>console.log('finnaly'));
     }
     /*getDataPerId(userId:string){
        return this.srvData.getOneUserById(userId).subscribe(data=>this.users=[data],error=>console.log(error),()=>console.log('finnaly'));
     }*/
    getUserDataPerId(userId:number):User{
       // debugger;
         var userArrayRes = this.users.filter(x=> x.id==userId);
            if(userArrayRes.length>0)
                return userArrayRes[0];
            else
                return null;
    }
    createUser(userChanged:any){
        
        var len = this.users.length;
        userChanged.id = len+1;
        this.users.push(userChanged);
    }
    editUserData(userChanged:any){
        var index=0;
        for (let user of this.users){
            if(user.id == userChanged.id){
                break;
            }
            index++;
        }
        this.users[index] = userChanged;
    }
    deleteUser(userChanged:any){
        var index=0;
        for (let user of this.users){
            if(user.id == userChanged.id){
                break;
            }
            index++;
        }
        this.users.splice(index, 1);
       
    }
    getAllPosts(){ 
        this.srvData.getAllPosts().subscribe(data=>this.posts=data,error=>console.log(error));
    }

    getPostByUser(userIdChanged:number){
        this.srvData.getPostByUser(userIdChanged).subscribe(data=>this.posts=data,error=>console.log(error),()=>console.log('finnaly'));
    } 

}
