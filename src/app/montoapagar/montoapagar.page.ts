import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { alertController } from '@ionic/core';


@Component({
  selector: 'app-montoapagar',
  templateUrl: './montoapagar.page.html',
  styleUrls: ['./montoapagar.page.scss'],
})
export class MontoapagarPage implements OnInit {

  constructor(public alertController: AlertController, private router: Router){}

  ngOnInit() {
  }

  async alert() {
    const alert = await alertController.create({
      header: 'Pago hecho correctamente',
      buttons: ['ok']
    });

    await alert.present();
  }

  continuar()
  {
    this.alert();
  }
  cancelar()
  {
    this.router.navigate(['/main'])

  }
}
