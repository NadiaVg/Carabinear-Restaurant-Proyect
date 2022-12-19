import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { TokenService } from 'src/app/services/token.service';
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
    public formBuilder: FormBuilder,
    private storage: Storage,
    private tokenService: TokenService) {}

  async ngOnInit() {

  this.users = this.tokenService.getUser()
  console.log(this.users)
    
   
  }

 

  
}
