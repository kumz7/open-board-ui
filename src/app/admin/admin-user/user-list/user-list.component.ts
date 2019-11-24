import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { user } from 'src/app/model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users:user[];
  selectedUser:user;
  constructor(private userService:UserServiceService) { }

  ngOnInit() {
    this.getUsers();
  }
  public getUsers(){
    this.userService.getUsers().subscribe(res=>this.users=res);
  }
  public delete(user){
    this.userService.removeUser(user).subscribe(res =>{
        this.getUsers();
    });
  }
}
