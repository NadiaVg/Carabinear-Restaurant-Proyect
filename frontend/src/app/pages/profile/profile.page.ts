import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  users: any = [];
  id: any;

  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder) {this.id = this.activatedRoute.snapshot.paramMap.get('id');}

  ngOnInit() {

    this.fetchUser(this.id)
   
  }

  fetchUser(id){
    this.userService.getUsers(this.id).subscribe((users => {
      this.users = users;
      console.log(users)
    }))
  }

  
}
