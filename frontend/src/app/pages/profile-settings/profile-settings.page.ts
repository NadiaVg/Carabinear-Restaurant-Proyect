import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Storage } from '@ionic/storage-angular';
import { TokenService } from 'src/app/services/token.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { AlertController } from '@ionic/angular';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

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

  darkMode: boolean = false;
  userForm: FormGroup;

  users : any = [];


  constructor( private authService: AuthService, private alertController: AlertController, private userService: UserService,  public formBuilder: FormBuilder, private router: Router, private storage: Storage, private tokenService: TokenService ) { 
    
  }

  ngOnInit() {
    this.users = this.tokenService.getUser()
    this.userForm = this.formBuilder.group({
      name: [''],
      email: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])]



,
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

    this.deleteAlert()
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.userForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      this.userService.updateUser(this.users.id, this.userForm.value, this.tokenService.getToken()).subscribe(data => {
        console.log("Photo sent!");
        this.router.navigateByUrl("/admin-list");
      })
    }
  }

  async deleteAlert() {
    const alert = await this.alertController.create({
      cssClass:'customErrorAlert',
      header: '¿Seguro?',
      subHeader: 'Se cerrará la sesión',
      buttons: [{
        text: 'Cerrar Sesión',
        cssClass: 'deleteButton',
        handler: () => {
          this.tokenService.logout()
          this.router.navigateByUrl("/home")
        }
      },{
        text: 'Cancelar',
        cssClass: 'alertButton',
      }],
    });

    await alert.present();
  }

  darkTheme() {
    this.darkMode = !this.darkMode;
    
    document.body.classList.toggle('dark');
  }

}
