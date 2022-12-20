import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DishService } from 'src/app/services/dish.service';
import { PhotoService } from 'src/app/services/photo.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-update-dish',
  templateUrl: './update-dish.page.html',
  styleUrls: ['./update-dish.page.scss'],
})
export class UpdateDishPage implements OnInit {

  id: any;
  dishForm: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";

  restaurantId: number;

  constructor(
    private dishService: DishService,
    private restaurantService: RestaurantService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private alertController: AlertController
  ) {
    
  }

  ngOnInit() {


    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.dishForm = this.formBuilder.group({
      name: ['']
    })
    this.fetchDish(this.id);
    
    this.dishService.getOneDish(this.id).subscribe((data => {
      this.restaurantId = data.restaurantId
    }))
  }

  fetchDish(id: number) {
    this.dishService.getOneDish(id).subscribe((data => {
      this.dishForm.setValue({
        name: data['name'],
      })
    }))
  }

  async submitForm() {
    this.isSubmitted = true;
    if (!this.dishForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      let blob = null;
      if (this.capturedPhoto != "") {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      }
      console.log(blob)
      this.dishService.updateDish(this.id, this.dishForm.value, blob, this.restaurantId).subscribe(data => {
        console.log("Photo sent!");
        this.okAlert();
      })
    }
  }

  get errorControl() {
    return this.dishForm.controls;
  }

  async okAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmado',
      cssClass:'customOkAlert',
      subHeader: 'Plato editado con éxito',
      buttons: [{
        text: 'Volver a Restaurantes',
        cssClass: 'alertButton',
        handler: () => {
          this.router.navigate(['/admin-list'])
        },
      },{
        text: 'Volver a Platos',
        cssClass: 'alertButton',
        handler: () => {
          this.router.navigate(['/dishes-list/' + this.id])
        },
      },],
    });

    await alert.present();
  }

  takePhoto() {
    // DECOMMENT:
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    // DECOMMENT:
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    // DECOMMENT:
    this.capturedPhoto = null;
  }

}
