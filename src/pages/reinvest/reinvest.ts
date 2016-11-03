import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the Reinvest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reinvest',
  templateUrl: 'reinvest.html'
})
export class Reinvest {

  constructor(public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello Reinvest Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
