import { Component } from '@angular/core';

import { AlertController, NavController } from 'ionic-angular';

import { Login } from '../login/login';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class Account {
  username: string;

  constructor(public alertCtrl: AlertController, public nav: NavController) {

  }

  ngAfterViewInit() {
    this.getUsername();
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  changeUsername() {
    let alert = this.alertCtrl.create({
      title: 'Change Username',
      buttons: [
        'Cancel'
      ]
    });
    alert.addInput({
      name: 'username',
      value: this.username,
      placeholder: 'username'
    });
    alert.addButton({
      text: 'Ok',
      handler: data => {
        this.getUsername();
      }
    });

    alert.present();
  }

  getUsername() {
    
  }

  changePassword() {
    console.log('Clicked to change password');
  }

  logout() {
    this.nav.setRoot(Login);
  }
}
