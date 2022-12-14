import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.page.html',
  styleUrls: ['./profile-settings.page.scss'],
})
export class ProfileSettingsPage implements OnInit {

  constructor( private authService: AuthService, private router: Router, private storage: Storage ) { }

  async ngOnInit() {

    await this.storage.create();

  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigateByUrl("/login");
    });
  }

}
