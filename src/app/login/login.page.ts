import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { alertController } from '@ionic/core';
import {HttpClient} from '@angular/common/http'



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario;

  constructor(public alertController: AlertController, private router: Router, private http: HttpClient)
  {
    this.http.get("").subscribe(snap=> 
      {
       console.log(snap);
       this.usuario=snap; 
      })
  }


  ngOnInit() 
  {
    
  }

  async alertaa() {
    const alert = await alertController.create({
      message: 'usuario o pswd incorrecto',
      buttons: ['TT miop lo wa a arreglar']
    });

    await alert.present();
  }

  enter()
  {
    //aqui debe haver una funcion que conecte a una base de ddatos para revisar si hay un cliente jasdja
    this.router.navigate(['/main'])

    //aqui va el roolback por si el usuario no fue el correcto que muestr esto 
    this.alertaa();
  }

  cancel()
  {
    this.router.navigate(['/home'])
  }

  
}
