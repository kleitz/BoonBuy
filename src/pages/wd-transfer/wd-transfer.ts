import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the WdTransfer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-wd-transfer',
  templateUrl: 'wd-transfer.html'
})
export class WdTransfer {

  constructor(public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello WdTransfer Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
