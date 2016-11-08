import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the WdBank page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-wd-bank',
  templateUrl: 'wd-bank.html'
})
export class WdBank {

  constructor(public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello WdBank Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
