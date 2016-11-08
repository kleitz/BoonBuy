import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the WdCtv page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-wd-ctv',
  templateUrl: 'wd-ctv.html'
})
export class WdCtv {

  constructor(public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello WdCtv Page');
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
