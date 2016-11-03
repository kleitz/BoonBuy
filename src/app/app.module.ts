import { NgModule } from '@angular/core';

import { IonicApp, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { Storage } from '@ionic/storage';

import { BoonBuyApp } from './app.component';

import { Home } from '../pages/home/home';
import { About } from '../pages/about/about';
import { Account } from '../pages/account/account';
import { Login } from '../pages/login/login';
import { Map } from '../pages/map/map';
import { Signup } from '../pages/signup/signup';
import { Tabs } from '../pages/tabs/tabs';
import { Tutorial } from '../pages/tutorial/tutorial';
import { PhoneVerification } from '../pages/phone-verification/phone-verification';
import { CompleteAccount } from '../pages/complete-account/complete-account';
import { ResetPassword } from '../pages/reset-password/reset-password';
import { Dashboard } from '../pages/dashboard/dashboard';
import { Deposits } from '../pages/deposits/deposits';
import { Withdraw } from '../pages/withdraw/withdraw';
import { Balance } from '../pages/balance/balance';
import { Reinvest } from '../pages/reinvest/reinvest';
import { Transactions } from '../pages/transactions/transactions';
import { ReferralLink } from '../pages/referral-link/referral-link';
import { Banks } from '../pages/banks/banks';

import { AuthProvider } from '../providers/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyCQioo7sK0JxhnD2joJZODU3jEnAQzoFCk",
  authDomain: "boonbuy-6f8e6.firebaseapp.com",
  databaseURL: "https://boonbuy-6f8e6.firebaseio.com",
  storageBucket: "boonbuy-6f8e6.appspot.com",
  messagingSenderId: "553084049731"
};

@NgModule({
  declarations: [
    BoonBuyApp,
    Home,
    About,
    Account,
    Login,
    Map,
    Signup,
    Tabs,
    Tutorial,
    PhoneVerification,
    CompleteAccount,
    ResetPassword,
    Dashboard,
    Deposits,
    Withdraw,
    Balance,
    Reinvest,
    Transactions,
    ReferralLink,
    Banks
  ],
  imports: [
    IonicModule.forRoot(BoonBuyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    BoonBuyApp,
    Home,
    About,
    Account,
    Login,
    Map,
    Signup,
    Tabs,
    Tutorial,
    PhoneVerification,
    CompleteAccount,
    ResetPassword,
    Dashboard,
    Deposits,
    Withdraw,
    Balance,
    Reinvest,
    Transactions,
    ReferralLink,
    Banks
  ],
  providers: [AuthProvider, Storage]
})
export class AppModule {}
