import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Add } from '../pages/add/add';
import { Info } from '../pages/info/info';
import { Classinfo } from '../pages/classinfo/classinfo';
import { Schedule } from '../pages/schedule/schedule';
import { Grade } from '../pages/grade/Grade';
import { Login } from '../pages/login/login';
import { Register } from '../pages/Register/Register';

@NgModule({
  declarations: [
    MyApp,
    Add,
    Info,
	  Classinfo,
	  Login,
    Schedule,
    Grade,
	  Register
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Add,
    Info,
	  Classinfo,
	  Login,
    Schedule,
    Grade,
	  Register
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
