import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { alertController } from '@ionic/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(public alertController: AlertController, private router: Router){}

  navigate(){
    this.router.navigate(['/detail'])
  }

  async Informacionimportante() {
    const alert = await alertController.create({
      header: 'Notas de funcionamiento',
      message: 'al hacer una solicitud de prestam usted tiene un plazo de 36 horas para modificar el prestamo a una cantidad menor de la que solicito, para marcar que es una mmodificacion debe ingresar su dni y numero de cuenta para proporcionar una ubicacion de ingreso pero si prefiere puede marcar la opcion de entrega fisica la cual le haremos la entrega en nuestras instalaciones',
      buttons: ['continuar']
    });
    await alert.present();
  }

  ngOnInit() 
  {

  }

  solicitar()
  {
    this.router.navigate(['/solicitar']);
    this.Informacionimportante();
  }

  pagos()
  {
    this.router.navigate(['/transaccion'])
  }


}
