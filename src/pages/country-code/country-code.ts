import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the CountryCode page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-country-code',
  templateUrl: 'country-code.html'
})
export class CountryCode {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CountryCode Page');
  }

}
