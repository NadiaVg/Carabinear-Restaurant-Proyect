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

  restaurant: any = [];

  constructor(private restaurantService: RestaurantService) {

    // this.genRandom();

    this.getRestaurant();

  }
  getRestaurant() {
    this.restaurantService.getOneRestaurant(10).subscribe(data => {
      this.restaurant.push(data);
      console.log(this.restaurant)
    })
  }

  // genRandom() {
  //   this.randomNumber = Math.floor(Math.random() *1000) + 1;
  //   while (this.randomNumber != null) {
  //     this.randomNumber = Math.floor(Math.random()) + 1;
  //   }
  //     console.log(this.randomNumber)
 
  // }

  ngOnInit() { }


}

