import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {timer} from 'rxjs'
import {takeWhile} from 'rxjs/operators'

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(private router: Router) { }

  alive:boolean=true;

  ngOnInit() {
    this.redireccionar();
  }

  redireccionar() {
    timer(1100).pipe(takeWhile(()=>this.alive)).subscribe(_=>{
      this.router.navigate(['/login1'])
   })
  }

  ngOnDestroy()
  {
      this.alive=false;
  }



}
