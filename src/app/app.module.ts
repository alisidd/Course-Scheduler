import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Add } from '../pages/add/add';
import { Info } from '../pages/info/info';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Login } from '../pages/login/login';
import { Register } from '../pages/Register/Register';

@NgModule({
  declarations: [
    MyApp,
    Add,
    Info,
	Login,
    Page1,
    Page2,
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
	Login,
    Page1,
    Page2,
	Register
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
