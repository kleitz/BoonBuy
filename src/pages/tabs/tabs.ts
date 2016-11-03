import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { Home } from '../home/home';
import { About } from '../about/about';
import { Map } from '../map/map';


@Component({
  templateUrl: 'tabs.html'
})
export class Tabs {
  // set the root pages for each tab
  tab1Root: any = Home;
  tab3Root: any = Map;
  tab4Root: any = About;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
}
