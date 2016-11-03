import { Component } from '@angular/core';

import { MenuController, NavController } from 'ionic-angular';

import { Login } from '../login/login';
import { Signup } from '../signup/signup';


export interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class Tutorial {
  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.slides = [
      {
        title: 'Welcome to <b>BBN</b>',
        description: 'Grow your money and enjoy smart living with your BBN app',
        image: 'assets/img/tutorials/1.png',
      },
      {
        title: 'Investment',
        description: 'Invest at different times and get 3% daily, every 24 hours for 90 days of investment.',
        image: 'assets/img/tutorials/2.png',
      },
      {
        title: 'News & Sports',
        description: 'Get the lastest issues in news and sports updates from your favorite teams.',
        image: 'assets/img/tutorials/3.png',
      }
    ];
  }

  startApp() {
    this.navCtrl.push(Signup);
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
