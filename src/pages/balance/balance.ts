import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the Balance page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-balance',
  templateUrl: 'balance.html'
})
export class Balance {

  constructor(public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello Balance Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
