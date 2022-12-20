import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { AlertController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.page.html',
  styleUrls: ['./admin-list.page.scss'],
})
export class AdminListPage implements OnInit {

  restaurants: any = [];
  searchRestaurant: string;

  constructor(private restaurantService: RestaurantService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getAllRestaurants();
  }

  getAllRestaurants() {
    this.restaurantService.getRestaurants().subscribe(restaurants => {
      console.log(restaurants);
      this.restaurants = restaurants;
    })
  }


  addRestaurant() {
    this.router.navigateByUrl("/add-restaurant");
  }


  async deleteAlert(restaurant) {
    const alert = await this.alertController.create({
      cssClass: 'customErrorAlert',
      header: '¿Seguro?',
      subHeader: 'Se eliminará el restaurante de forma permanente',
      buttons: [{
        text: 'Eliminar',
        cssClass: 'deleteButton',
        handler: () => {
          this.restaurantService.deleteRestaurant(restaurant.id)
            .subscribe(() => {
              this.getAllRestaurants();
              console.log('Restaurant deleted!')
            })
      }},{
        text: 'Cancelar',
        cssClass: 'alertButton',
      }],
    });

    await alert.present();
  }


  removeRestaurant(restaurant) {
    this.deleteAlert(restaurant);
  }

}
