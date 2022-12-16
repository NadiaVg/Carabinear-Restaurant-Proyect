import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DishService } from 'src/app/services/dish.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.page.html',
  styleUrls: ['./dishes.page.scss'],
})
export class DishesPage implements OnInit {

  dish: any = [];
  id: any;

  constructor(private dishService: DishService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

  }

  ngOnInit() {
  }

  fetchDishes() {
    this.dish

  }

}
