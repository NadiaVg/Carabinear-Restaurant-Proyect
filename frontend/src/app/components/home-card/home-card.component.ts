import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/interfaces/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
})
export class HomeCardComponent implements OnInit {

  randomNumber;

  restaurants: any = [];

  restaurant: any = []

  ngOnInit(){}

  constructor(private restaurantService: RestaurantService) {

    this.getRestaurant();

  }  
  getRestaurant() {
    this.restaurantService.getRestaurants().subscribe(data => {
      this.restaurants = data;
      this.restaurant.push(this.restaurants[this.genRandom(this.restaurants.length)]) 
    })

  }

  genRandom(num: number) {
    return Math.floor(Math.random() * num);
  }
}


