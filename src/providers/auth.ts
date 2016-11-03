import { Injectable } from '@angular/core';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthProvider {

  constructor(public events: Events, public af: AngularFire, public storage: Storage) {
    console.log('AuthProvider');
  }

  loginWithEmail(credentials) {
    return Observable.create(observer => {
      this.af.auth.login(credentials, {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      }).then((authData) => {
        // console.log(authData);
        observer.next(authData);
      }).catch((error) => {
        observer.error(error);
      });
    });
  }

  registerUser(credentials: any) {
    return Observable.create(Observer => {
      this.af.auth.createUser(credentials).then(authData => {
        credentials.created = true;
        Observer.next(credentials);
      }).catch(error => {
        Observer.error(error);
      });
    });
  }

  loginWithGoogle() {
    return Observable.create(observer => {
      this.af.auth.login({
        provider: AuthProviders.Google,
        method: AuthMethods.Popup
      }).then((authData) => {
        //login succeed...
        observer.next(authData);
      }).catch((error) => {
        observer.error(error);
      });
    });
  }

  loginWithFacebook() {
    
  }

}
