import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Storage } from '@ionic/storage-angular';
import { TokenService } from 'src/app/services/token.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.page.html',
  styleUrls: ['./profile-settings.page.scss'],
})
export class ProfileSettingsPage implements OnInit {

  name: string;
  CP: number;
  email: string;
  isSubmitted: boolean = false;

  userForm: FormGroup;

  users : any = [];

  constructor( private authService: AuthService, private userService: UserService,  public formBuilder: FormBuilder, private router: Router, private storage: Storage, private tokenService: TokenService ) { 
    
  }

  ngOnInit() {
    this.users = this.tokenService.getUser()
    this.userForm = this.formBuilder.group({
      name: [''],
      email: [''],
      CP: ['']
    })

    
    this.userForm.setValue({
      name: this.users.name,
      CP: this.users.CP,
      email: this.users.username,
    })
  }

  get errorControl() {
    return this.userForm.controls;
  }

  logout() {
    this.tokenService.logout()
    this.router.navigateByUrl("/home")
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.userForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      this.userService.updateUser(this.users.id, this.userForm.value).subscribe(data => {
        console.log("Photo sent!");
        this.router.navigateByUrl("/admin-list");
      })
    }
  }

}
