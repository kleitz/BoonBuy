import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the WdIkelectric page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-wd-ikelectric',
  templateUrl: 'wd-ikelectric.html'
})
export class WdIkelectric {

  constructor(public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('Hello WdIkelectric Page');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
