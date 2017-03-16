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
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, public toastCtrl: ToastController) {
	// If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('item');
    let type = navParams.get('type');
    let list = [];
    if (type === "find") {
      list = ["SENG 310", "CSC 361", "MATH 202", "CSC 320"]
    } else if (type === "recommend") {
      list = ["SENG 310", "CSC 361", "MATH 202", "CSC 320"]
    } else if (type === "csc") {
      list = ["SENG 310", "CSC 361", "MATH 202", "CSC 320"]
    } else if (type === "engr") {
      list = ["SENG 310", "CSC 361", "MATH 202", "CSC 320"]
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