import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the WdInternet page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-wd-internet',
  templateUrl: 'wd-internet.html'
})
export class WdInternet {

  constructor(public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello WdInternet Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
