import { Component } from '@angular/core';

import {schedule} from '../schedule/schedule';


import { NavController, NavParams, ModalController, ToastController, ViewController } from 'ionic-angular';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class Login {
	username = "";
	password = "";

constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController, public viewCtrl: ViewController) {
	this.username = "";
	this.password = "";
}

loginUser() {
	if (this.username == "") {
		return this.toastCtrl.create({
			message: "Enter A Username",
			duration: 1500
		}).present();
	}
	
	if (this.password == "") {
		return this.toastCtrl.create({
			message: "Enter A Username",
			duration: 1500
		}).present();
	}
	
	const index = this.viewCtrl.index;
    // then we remove it from the navigation stack
    this.navCtrl.popToRoot();
	this.navCtrl.push(schedule);
}
}

