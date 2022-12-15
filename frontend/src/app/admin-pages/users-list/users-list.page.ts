import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.page.html',
  styleUrls: ['./users-list.page.scss'],
})
export class UsersListPage implements OnInit {

  users: any = [];
  searchUser: string;

  constructor( private userService: UserService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    
  }

  getAllUsers(){
    this.userService.getUsers("token").subscribe(users => {
      console.log(users);
      this.users = users;
    })
  }

  removeUser(user){
    
  }

}
