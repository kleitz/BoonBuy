import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the Withdraw page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-withdraw',
  templateUrl: 'withdraw.html'
})
export class Withdraw {

  withdrawModes: Array<string>;
  constructor(public viewCtrl: ViewController) {
    this.withdrawModes = [
      "To Bank",
      "Transfer",
      "Recharge",
      "DSTV",
      "Internet Subscription",
      "Shopping",
      "Movie Ticket",
      "Event Ticket"
    ];
  }

  ionViewDidLoad() {
    console.log('Hello Withdraw Page');
  }

  itemTapped(event, index) {
    console.log(index);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
