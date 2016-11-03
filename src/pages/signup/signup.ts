import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhoneVerification } from '../phone-verification/phone-verification';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class Signup {
  signup: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController) {}

  onNext(form) {
    this.submitted = true;

    if (form.valid) {
      this.navCtrl.push(PhoneVerification);
    }
  }
}
