import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit() {}

  loginOrJustEnter(){
    this.authService.isLoggedIn().then(loggedIn => {
      if(loggedIn){
        this.router.navigateByUrl("/profile");
        return;
      } 
      this.router.navigateByUrl("/login");
    })
  }

}
