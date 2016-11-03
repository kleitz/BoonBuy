import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the Transactions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html'
})
export class Transactions {

  constructor(public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello Transactions Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
