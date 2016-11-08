import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the WdEticket page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-wd-eticket',
  templateUrl: 'wd-eticket.html'
})
export class WdEticket {

  constructor(public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello WdEticket Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
