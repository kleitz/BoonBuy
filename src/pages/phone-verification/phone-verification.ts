import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CompleteAccount } from '../complete-account/complete-account';


/*
  Generated class for the PhoneVerification page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-phone-verification',
  templateUrl: 'phone-verification.html'
})
export class PhoneVerification {
  phoneNumber: {countryCode?: string, phoneNumber?: string} = {};
  confirmCcode: string;
  submitted = false;
  hasSentPhoneNumber = false;
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Phone Verification Page');
  }
  
  onVerify(form) {
    this.submitted = true;

    if (form.valid) {
      this.hasSentPhoneNumber = true;
    }
  }

  onConfirm(form) {
    if (form.valid) {
      this.navCtrl.push(CompleteAccount);
    }
  }


}
