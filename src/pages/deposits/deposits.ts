import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the Deposits page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-deposits',
  templateUrl: 'deposits.html'
})
export class Deposits {
  selectedPlan: string;
  constructor(public viewCtrl: ViewController) {
    this.selectedPlan = "N20,000";
  }

  ionViewDidLoad() {
    console.log('Hello Deposits Page');
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
