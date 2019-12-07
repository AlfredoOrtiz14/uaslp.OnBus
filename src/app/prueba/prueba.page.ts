import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  radioChecked(data)
  {
    this.navCtrl.navigateForward(['/home',{data:data}]);
  }

}
