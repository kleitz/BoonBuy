import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { Deposits } from '../deposits/deposits';
import { Withdraw } from '../withdraw/withdraw';
import { Balance } from '../balance/balance';
import { Reinvest } from '../reinvest/reinvest';
import { Transactions } from '../transactions/transactions';
import { ReferralLink } from '../referral-link/referral-link';
import { Banks } from '../banks/banks';

/*
  Generated class for the Dashboard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class Dashboard {

  constructor(public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('Hello Dashboard Page');
  }

  openDepositsPage() {
    let modal = this.modalCtrl.create(Deposits);
    modal.present(); 
  }

  openWithdrawPage() {
    let modal = this.modalCtrl.create(Withdraw);
    modal.present();
  }

  openMyBalancePage() {
    let modal = this.modalCtrl.create(Balance);
    modal.present();
  }

  openReinvestPage() {
    let modal = this.modalCtrl.create(Reinvest);
    modal.present();
  }

  openAllTransPage() {
    let modal = this.modalCtrl.create(Transactions);
    modal.present();
  }

  openMyReferPage() {
    let modal = this.modalCtrl.create(ReferralLink);
    modal.present();
  }

  openAddBankPage() {
    let modal = this.modalCtrl.create(Banks);
    modal.present();
  }

}
