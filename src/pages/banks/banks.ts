import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the Banks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-banks',
  templateUrl: 'banks.html'
})
export class Banks {

  constructor(public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello Banks Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
