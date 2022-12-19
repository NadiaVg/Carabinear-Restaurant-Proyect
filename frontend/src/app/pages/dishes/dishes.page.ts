import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dish } from 'src/app/interfaces/dish';
import { DishService } from 'src/app/services/dish.service';
import { LoadScriptService } from 'src/app/services/load-script.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.page.html',
  styleUrls: ['./dishes.page.scss'],
})
export class DishesPage implements OnInit {

  dishes: Dish[];
  id: any;

  constructor(private dishService: DishService,
    private activatedRoute: ActivatedRoute,
    private name: LoadScriptService) {
    this.name.Load(["slider"]);
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.dishService.getDishesByRestaurantId(this.id).subscribe((dishes) => {
      this.dishes = dishes;
    })
  }


}
