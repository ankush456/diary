import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

// Import pages
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { DiaryPage } from '../pages/diary/diary';
import { DiaryEditPage } from '../pages/diary-edit/diary-edit';
import { DiaryListPage } from '../pages/diary-list/diary-list';
import { DiaryDetailPage } from '../pages/diary-detail/diary-detail';
import { MemoEditPage } from '../pages/memo-edit/memo-edit';
import { MemoItemEditPage } from '../pages/memo-item-edit/memo-item-edit';
import { MemoListPage } from '../pages/memo-list/memo-list';
import { MemoDetailPage } from '../pages/memo-detail/memo-detail';
import { ContactEditPage } from '../pages/contact-edit/contact-edit';
import { ContactListPage } from '../pages/contact-list/contact-list';
import { ContactDetailPage } from '../pages/contact-detail/contact-detail';
import { CalendarPage } from '../pages/calendar/calendar';
import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SuggestionPage } from '../pages/suggestion/suggestion';
import { AboutPage } from '../pages/about/about';
import { UserConfigPage } from '../pages/user-config/user-config';
import { PinConfigPage } from '../pages/pin-config/pin-config';
import { LocaleConfigPage } from '../pages/locale-config/locale-config';

// Import custom components
import { Autoresize } from '../components/autoresize/autoresize';

// Import providers
import { AuthService } from '../providers/auth-service';
import { DiaryService } from '../providers/diary-service';
import { MemoService } from '../providers/memo-service';
import { ContactService } from '../providers/contact-service';
import { ConfigService } from '../providers/config-service';
import { LocaleService } from '../providers/locale-service';

// Import pipes
import { ChineseDay } from '../pipes/chinese-day';

// Import AF2 Module
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

// AF2 Settings (test env)
export const firebaseConfig = {
  apiKey: "AIzaSyD32sKxShQFAm4i89RvpGLZ20CEG5GGwn0",
  authDomain: "diary-ef727.firebaseapp.com",
  databaseURL: "https://diary-ef727.firebaseio.com",
  storageBucket: "diary-ef727.appspot.com",
  messagingSenderId: "27495482723"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

// Import internationlization module
import { Http } from '@angular/http';
import {TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate/ng2-translate';
import { PinDialog } from '../../node_modules/ionic-native';

// Internationalization factory
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    DiaryPage,
    DiaryEditPage,
    DiaryListPage,
    DiaryDetailPage,
    MemoEditPage,
    MemoItemEditPage,
    MemoListPage,
    MemoDetailPage,
    ContactEditPage,
    ContactListPage,
    ContactDetailPage,
    CalendarPage,
    LandingPage,
    LoginPage,
    SignupPage,
    ResetPasswordPage,
    SuggestionPage,
    AboutPage,
    UserConfigPage,
    PinConfigPage,
    LocaleConfigPage,
    Autoresize,
    ChineseDay
  ],
  imports: [
    // Set the whole app in iOS's style
    IonicModule.forRoot(MyApp, {mode: 'ios', backButtonText: ''}),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    // Internationalization setup
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    DiaryPage,
    DiaryEditPage,
    DiaryListPage,
    DiaryDetailPage,
    MemoEditPage,
    MemoItemEditPage,
    MemoListPage,
    MemoDetailPage,
    ContactEditPage,
    ContactListPage,
    ContactDetailPage,
    CalendarPage,
    LandingPage,
    LoginPage,
    SignupPage,
    ResetPasswordPage,
    SuggestionPage,
    AboutPage,
    UserConfigPage,
    PinConfigPage,
    LocaleConfigPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage,
    AuthService,
    DiaryService,
    MemoService,
    ContactService,
    ConfigService,
    LocaleService,PinDialog
  ]
})
export class AppModule {}
