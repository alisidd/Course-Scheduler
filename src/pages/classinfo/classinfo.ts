import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { NavController, ModalController, ToastController, NavParams, ViewController } from 'ionic-angular';
import { Info } from '../info/info';
import { Register } from '../Register/Register';
import { Schedule } from '../schedule/schedule';

@Component({
  selector: 'page-classinfo',
  templateUrl: 'classinfo.html'
})
export class Classinfo {
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, public toastCtrl: ToastController) {
  }
  
}