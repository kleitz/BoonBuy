import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the WdRecharge page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-wd-recharge',
  templateUrl: 'wd-recharge.html'
})
export class WdRecharge {

  constructor(public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello WdRecharge Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
