import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the ReferralLink page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-referral-link',
  templateUrl: 'referral-link.html'
})
export class ReferralLink {
  refno: {no?: string, password?: string} = {};
  constructor(public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello ReferralLink Page');
  }

  onSend(form) {
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
