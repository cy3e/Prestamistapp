import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { alertController } from '@ionic/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(public alertController: AlertController, private router: Router){}


  async alert() {
    const alert = await alertController.create({
      header: 'cuenta creada sactifactoriamente',
      buttons: ['continuar']
    });

    await alert.present();
  }

  async politica() {
    const alert = await alertController.create({
      header: 'Politica de privacidad',
      message: 'Prestamistapp ofrece un servicio el cual usa sus datos  privados ,como nombre, dni, tarjeta de credito/debito etc para brindarle la simplicidad al realizar sus pagos u pedir sus prestamos ',
      buttons: ['continuar']
    });

    await alert.present();
  }



  crear()
  {
    this.alert();
    this.router.navigate(['/login'])
  }

  cancel()
  {
    this.router.navigate([''])
  }

  politicas(){
    this.politica();
  }

  ngOnInit()
  {

  }

}
