import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Dish } from 'src/app/interfaces/dish';
import { DishService } from 'src/app/services/dish.service';
import { LoadScriptService } from 'src/app/services/load-script.service';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.page.html',
  styleUrls: ['./dishes-list.page.scss'],
})
export class DishesListPage implements OnInit {

  id: any = [];
  dishes: Dish[];
  searchDish: string;

  constructor(private dishService: DishService, private router: Router, private alertController: AlertController, 
    private activatedRoute: ActivatedRoute,
    private name: LoadScriptService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.dishService.getDishesByRestaurantId(this.id).subscribe((dishes) => {
      this.dishes = dishes;
    })
  }

  ionViewDidEnter(){
    this.getAllDishes();
  }

  getAllDishes() {
    this.dishService.getDishes().subscribe(dishes => {
      console.log(dishes);
      this.dishes = dishes;
    })
  }

  
  addDish(){
    this.router.navigateByUrl("/add-dish");
  }


  async deleteAlert(dish) {
    const alert = await this.alertController.create({
      cssClass:'customErrorAlert',
      header: '¿Seguro?',
      subHeader: 'Se eliminará el dishe de forma permanente',
      buttons: [{
        text: 'Eliminar',
        cssClass: 'deleteButton',
        handler: () => {
          console.log(dish.id)
          this.dishService.deleteDish(dish.id)
        }
      },{
        text: 'Cancelar',
        cssClass: 'alertButton',
        handler: () => {
          console.log('si')
        }
      }],
    });

    await alert.present();
  }


  removeDish(dish) {
    // this.deleteAlert(dish);
    if (window.confirm('Are you sure')) {
      this.dishService.deleteDish(dish.id)
      .subscribe(() => {
        this.getAllDishes();
        console.log('Dish deleted!')
      })
    }
  }


}
