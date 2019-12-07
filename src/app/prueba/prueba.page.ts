import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {

  valor = 'Fernando';
  
  constructor(
  private navCtrl: NavController
  
  ) { }

  ngOnInit() {
  }

  radioChecked(event)
  {
    console.log(event.detail.value);
    this.navCtrl.navigateForward("/home/");
  }

  
}
