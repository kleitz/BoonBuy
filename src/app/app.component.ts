import { Component, ViewChild } from '@angular/core';

import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { Splashscreen, StatusBar } from 'ionic-native';

import { Home } from '../pages/home/home';
import { Account } from '../pages/account/account';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { Tabs } from '../pages/tabs/tabs';
import { About } from '../pages/about/about';
import { Map } from '../pages/map/map';
import { Tutorial } from '../pages/tutorial/tutorial';
import { PhoneVerification } from '../pages/phone-verification/phone-verification';
import { CompleteAccount } from '../pages/complete-account/complete-account';
import { ResetPassword } from '../pages/reset-password/reset-password';
import { Dashboard } from '../pages/dashboard/dashboard';

export interface PageObj {
  title: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
}

@Component({
  templateUrl: 'app.template.html'
})
export class BoonBuyApp {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
  appPages: PageObj[] = [
    { title: 'Dashboard', component: Dashboard, icon: 'calendar' },
    { title: 'Home',      component: Home, icon: 'calendar' },
    { title: 'Map',       component: Map, icon: 'map' },
    { title: 'About',     component: About, icon: 'information-circle' },
  ];
  loggedInPages: PageObj[] = [
    { title: 'Account', component: Account, icon: 'person' },
    { title: 'Logout', component: Tabs, icon: 'log-out', logsOut: true }
  ];
  rootPage: any = Dashboard;

  constructor(
    public events: Events,
    public menu: MenuController,
    platform: Platform,
  ) {
    // Call any initial plugins when ready
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

 
    this.listenToLoginEvents();
  }

  openPage(page: PageObj) {
    // the nav component was found using @ViewChild(Nav)
    // reset the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);

    if (page.logsOut === true) {
      // Give the menu time to close before changing to logged out
      setTimeout(() => {
      }, 1000);
    }
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:signup', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
    });
  }

  enableMenu(loggedIn) {
    this.menu.enable(loggedIn, 'loggedInMenu');
    this.menu.enable(!loggedIn, 'loggedOutMenu');
  }
}
