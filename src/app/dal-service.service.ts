import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { User } from './user';

@Injectable()
export class DalServiceService {

    url:string = 'https://jsonplaceholder.typicode.com/users'; //users
    urlPost:string = 'https://jsonplaceholder.typicode.com/posts'; // posts of user
    users:User[]=[]; 
    constructor(private http:Http) {

    }

    public getData(){
        return this.http.get(this.url).map((res:Response)=>res.json());
    }
    public getOneUserById(userId:string){
        return this.http.get(this.url + '/' +userId).map((res:Response)=>res.json());
    }
    public getAllPosts(){
        return this.http.get(this.urlPost).map((res:Response)=>res.json());
    }
    public getPostByUser(userId:number){
        return this.http.get(this.urlPost + '?userId=' + userId).map((res:Response)=>res.json());
    }
}
