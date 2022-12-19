import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { Storage } from '@ionic/storage-angular';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: any = [];

  constructor(private router: Router,
    private authService: AuthService,
    private alertController: AlertController,
    private storage: Storage,
    private tokenService: TokenService) { }

  async ngOnInit() {
    await this.storage.create();
  }

  login(form) {
    let user: User = {
      id: null,
      username: form.value.email,
      password: form.value.password,
      name: null,
      CP: null,
      admin: null
    };
    this.authService.login(user).subscribe((res) => {
      if (!res.access_token) {
        this.presentAlert("invalid credentials");
        return;
      } if (user.admin == true) {
        this.tokenService.setToken(res.access_token)
        this.tokenService.saveUser(res.user)
        console.log(res.user)
        console.log(res.access_token)
        this.router.navigateByUrl('/admin-list');
        form.reset();
      } else {
        this.tokenService.setToken(res.access_token)
        this.tokenService.saveUser(res.user)
        console.log(res.user)
        console.log(res.access_token)
        console.log(user.admin)
        this.router.navigateByUrl('/profile');
        form.reset();
      }
    }, err => {
      this.presentAlert("Error");
    });
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'customErrorAlert',
      header: 'Error',
      subHeader: message,
      message: 'Could not login. Try again.',
      buttons: ['OK']
    });

    await alert.present();
  }


}
