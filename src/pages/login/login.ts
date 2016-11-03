import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';

import { Signup } from '../signup/signup';
import { Tabs } from '../tabs/tabs';

import { AuthProvider } from '../../providers/auth';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
  user: {email?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public auth: AuthProvider) {

  }

  onLogin(form) {
    this.submitted = true;

    if (form.valid) {
      let loading = this.loadingCtrl.create({
        content: 'One moment...'
      });
      loading.present();
      this.auth.loginWithEmail(this.user).subscribe(data => {
        console.log(this.user);
        setTimeout(() => {
          loading.dismiss();
          this.navCtrl.push(Tabs);
        })
      }, err => {
        loading.dismiss();
        console.log(err);
      });
    }
  }

  onLoginWithGoogle() {
    this.auth.loginWithGoogle().subscribe(data => {
      this.navCtrl.push(Tabs);
    }, err => {
      console.log("Error");
    });
  }

  onSignup() {
    this.navCtrl.push(Signup);
  }
}
