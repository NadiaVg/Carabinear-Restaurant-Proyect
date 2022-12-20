import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DishService } from 'src/app/services/dish.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-add-dishes',
  templateUrl: './add-dishes.page.html',
  styleUrls: ['./add-dishes.page.scss'],
})
export class AddDishesPage implements OnInit {

  dishForm: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";

  id: any;
  
  constructor(public formBuilder: FormBuilder,
    private dishService: DishService,
    private photoService: PhotoService,
    private alertController: AlertController,
    private router: Router) { }
    ionViewWillEnter() {
      this.dishForm.reset();
      this.isSubmitted = false;
      this.capturedPhoto = "";
    }
  
    ngOnInit() {
      this.dishForm = this.formBuilder.group({
        name: ['', [Validators.required]]
      })
    }
  
    get errorControl() {
      return this.dishForm.controls;
    }
  
    takePhoto() {
      this.photoService.takePhoto().then(data => {
        this.capturedPhoto = data.webPath;
      });
    }
  
    pickImage() {
      this.photoService.pickImage().then(data => {
        this.capturedPhoto = data.webPath;
      });
    }
  
    discardImage() {
      this.capturedPhoto = null;
    }
  
    async errorAlert() {
      const alert = await this.alertController.create({
        cssClass:'customErrorAlert',
        header: 'Error',
        subHeader: 'Faltan datos',
        buttons: [{
          text: 'OK',
          cssClass: 'alertButton'
        }],
      });
  
      await alert.present();
    }
  
  
    async okAlert() {
      const alert = await this.alertController.create({
        header: 'Confirmado',
        cssClass:'customOkAlert',
        subHeader: 'Plato añadido con éxito',
        buttons: [{
          text: 'OK',
          cssClass: 'alertButton',
          handler: () => {
            window.location.reload()
          },
        },{
          text: 'Back to list',
          cssClass: 'alertButton',
          handler: () => {
            this.router.navigate(['/dishes-list/' + this.id])
          },
        },],
      });
  
      await alert.present();
    }
  
    async submitForm() {
      this.isSubmitted = true;
      if (!this.dishForm.valid) {
        console.log('Please provide all the required values!')
        this.errorAlert();
        return false;
      } else {
        let blob = null;
        if (this.capturedPhoto != "") {
          const response = await fetch(this.capturedPhoto);
          blob = await response.blob();
        }
        this.dishService.createDish(this.dishForm.value, blob).subscribe(data => {
        this.okAlert();
        })
      }
    }
  
  
  

}
