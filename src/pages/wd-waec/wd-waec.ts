import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the WdWaec page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-wd-waec',
  templateUrl: 'wd-waec.html'
})
export class WdWaec {

  constructor(public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello WdWaec Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
