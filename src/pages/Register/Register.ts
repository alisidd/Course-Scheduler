import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { NavController, ModalController, ToastController, NavParams, ViewController } from 'ionic-angular';
import { Info } from '../info/info';
//import { classinfo } from '../classinfo/classinfo';

@Component({
  selector: 'page-register',
  templateUrl: 'Register.html'
})

export class Register {
  selectedItem: any;
  public icon: boolean;
 // items: Array<{title: string, note: string, icon: string}>;
  classes: Array<{title: string, icon: boolean}>;
  type: string;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, public toastCtrl: ToastController) {
	// If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('item');
    this.type = navParams.get('type');
    let list = [];
    if (this.type === "find") {
      list = ["POLI 103", "EOS 110", "MATH 202"]
    } else if (this.type === "recommend") {
      list = ["SENG 310", "GRS 204", "ECON 104"]
    } else if (this.type === "csc") {
      list = ["CSC 305", "CSC 320", "CSC 361"]
    } else if (this.type === "engr") {
      list = ["ENGR 100", "ENGR 240", "ENGR 280"]
    }
    this.classes = list.map( function (value) {
      return {title: value, icon: false};
    });
  }

  itemClicked(event, item) {
		let modal = this.modalCtrl.create(Info, item);
		modal.present();
  }

  register() {
    if (this.classes.filter( value => value.icon ).length)
      this.navCtrl.pop();
    else {
      let toast = this.toastCtrl.create({
        message: "No classes selected",
        duration: 1500
      });
      toast.present();
    }
  }

}
