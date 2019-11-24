import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/model/user';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit {
  user:user = new user();
  constructor(private userservice:UserServiceService) { }

  ngOnInit() {

  }
  public save(){
    this.userservice.addUsers(this.user).subscribe();
  }
}
