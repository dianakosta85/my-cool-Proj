import { Component, OnInit,Input } from '@angular/core';
import { DataService } from '../data.service';
import{ Post } from '../post';
import { User } from '../user';

@Component({
  selector: 'app-posts-child',
  templateUrl: './posts-child.component.html',
  styleUrls: ['./posts-child.component.css']
})
export class PostsChildComponent implements OnInit {

  @Input()
  posts:Array<Post>=[{"userId":0,"title":"","body":""}];
  @Input() showSearchPost:Boolean=true;
  selectedUser:User;
  usersTMP:User[];
  newPost:Post;
  showForm:boolean = false;

  constructor(private data:DataService) {this.newPost={"userId":0,"title":"","body":""}; }

  ngOnInit() {
    
  }

  /*ngAfterContentInit(){
    this.data.getAllPosts();
  }*/

  submitForm(){
    this.newPost.userId = this.selectedUser.id;
    this.data.posts.push(this.newPost);
    this.posts = this.data.posts;
  }
  
  getPostsByUserName(userName:string){
    
      //this.data.getAllPosts();
      if(userName==undefined){
        this.posts = [{"userId":0,"title":"","body":""}];
        return;
      }
      try{
        debugger; 
        this.usersTMP = this.data.users.filter(x=> x.name==userName);
        if(this.usersTMP.length > 0){
          this.selectedUser = this.usersTMP[0]; 
          this.data.getPostByUser(this.selectedUser.id);
          this.posts = this.data.posts;
          this.showForm = true;
        }else{
          this.posts = [{"userId":0,"title":"","body":""}];
        }
      }catch(e){
          console.log(e);
      }
    }


}
