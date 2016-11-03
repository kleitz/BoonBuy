import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Home } from '../home/home';
/*
  Generated class for the Complete Account page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-complete-account',
  templateUrl: 'complete-account.html'
})
export class CompleteAccount {
  account: {location?: string, password?: string} = {};
  submitted = false;
  constructor(public navCtrl: NavController) {}

  onFinish(form) {
    this.submitted = true;

    // if (form.valid) {
      this.navCtrl.setRoot(Home);
    // }
  }

  ionViewDidLoad() {
    console.log('Hello Complete Account Page');
  }

}
