import { Component } from '@angular/core';
import { ViewController, ModalController } from 'ionic-angular';

import { WdBank } from '../wd-bank/wd-bank';
import { WdTransfer } from '../wd-transfer/wd-transfer';
import { WdRecharge } from '../wd-recharge/wd-recharge';
import { WdCtv } from '../wd-ctv/wd-ctv';
import { WdInternet } from '../wd-internet/wd-internet';
import { WdIkelectric } from '../wd-ikelectric/wd-ikelectric';
import { WdWaec } from '../wd-waec/wd-waec';
import { WdEticket } from '../wd-eticket/wd-eticket';

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
  constructor(public viewCtrl: ViewController, public modalCtrl: ModalController) {
    this.withdrawModes = [
      "To Bank",
      "Transfer",
      "Recharge",
      "Cable TV",
      "Internet Subscription",
      "Ikeia Electric",
      "WAEC",
      "Event Ticket"
    ];
  }

  ionViewDidLoad() {
    console.log('Hello Withdraw Page');
  }

  itemTapped(event, index) {
    var modal = null;
    
    switch(index) {
      case 0:
        modal = this.modalCtrl.create(WdBank);
        break;
      case 1:
        modal = this.modalCtrl.create(WdTransfer);
        break;
      case 2:
        modal = this.modalCtrl.create(WdRecharge);
        break;
      case 3:
        modal = this.modalCtrl.create(WdCtv);
        break;
      case 4:
        modal = this.modalCtrl.create(WdInternet);
        break;
      case 5:
        modal = this.modalCtrl.create(WdIkelectric);
        break;
      case 6:
        modal = this.modalCtrl.create(WdWaec);
      case 7:
        modal = this.modalCtrl.create(WdEticket);
        break;
      default:
        break;
    }
    if (modal != null)
      modal.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
