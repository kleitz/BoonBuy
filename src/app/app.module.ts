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

import { Balance } from '../pages/balance/balance';
import { Reinvest } from '../pages/reinvest/reinvest';
import { Transactions } from '../pages/transactions/transactions';
import { ReferralLink } from '../pages/referral-link/referral-link';
import { Banks } from '../pages/banks/banks';

import { Withdraw } from '../pages/withdraw/withdraw';
import { WdBank } from '../pages/wd-bank/wd-bank';
import { WdTransfer } from '../pages/wd-transfer/wd-transfer';
import { WdRecharge } from '../pages/wd-recharge/wd-recharge';
import { WdCtv } from '../pages/wd-ctv/wd-ctv';
import { WdInternet } from '../pages/wd-internet/wd-internet';
import { WdIkelectric } from '../pages/wd-ikelectric/wd-ikelectric';
import { WdWaec } from '../pages/wd-waec/wd-waec';
import { WdEticket } from '../pages/wd-eticket/wd-eticket';

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
    Balance,
    Reinvest,
    Transactions,
    ReferralLink,
    Banks,
    Withdraw,
    WdBank,
    WdTransfer,
    WdRecharge,
    WdCtv,
    WdInternet,
    WdIkelectric,
    WdWaec,
    WdEticket
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
    Balance,
    Reinvest,
    Transactions,
    ReferralLink,
    Banks,
    Withdraw,
    WdBank,
    WdTransfer,
    WdRecharge,
    WdCtv,
    WdInternet,
    WdIkelectric,
    WdWaec,
    WdEticket
  ],
  providers: [AuthProvider, Storage]
})
export class AppModule {}
