import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Restaurant } from 'src/app/interfaces/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  restaurants: Restaurant[];
  searchRestaurant: string;
  
  constructor(private restaurantService: RestaurantService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getAllRestaurants();
  }

  getAllRestaurants() {
    this.restaurantService.getRestaurants().subscribe((restaurants) => {
      console.log(restaurants);
      this.restaurants = restaurants;
    })
  }

  






}
