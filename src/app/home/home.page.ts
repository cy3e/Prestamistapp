import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { alertController } from '@ionic/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController, private router: Router){}

  async alert() {
    const alert = await alertController.create({
      header: 'Disculpenos',
      message: 'servicio aun no Disponible disculpenos las molestias',
      buttons: ['TT miop ustedes son duros']
    });

    await alert.present();
  }

  login()
  {
    this.router.navigate(['/login'])
  }

  signup()
  {
    this.router.navigate(['/signup'])
  }


    



}
