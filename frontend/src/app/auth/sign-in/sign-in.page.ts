import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {



  constructor(private router: Router, private authService: AuthService, private storage: Storage, private alertController: AlertController) {

  }



  async ngOnInit() {
    await this.storage.create();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'customErrorAlert',
      header: 'Error',
      subHeader: 'Faltan datos',
      message: 'No se ha podido registrar',
      buttons: ['OK']
    });

    await alert.present();
  }

  register(form) {
    let user: User = {
      id: null,
      username: form.value.email,
      password: form.value.password,
      name: form.value.name,
      CP: form.value.CP,
      admin: false
    };
    this.authService.register(user).subscribe((res) => {
      this.router.navigateByUrl('home');
    }, err => {
      this.presentAlert();
    });
  }

 
}
