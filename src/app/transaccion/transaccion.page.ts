import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.page.html',
  styleUrls: ['./transaccion.page.scss'],
})
export class TransaccionPage implements OnInit {

  constructor(private router: Router){}

  ngOnInit() {
  }

  continuar()
  {
    this.router.navigate(['/montoapagar'])

  }
  cancelar()
  {
    this.router.navigate(['/main'])

  }

}
