import { Component, Input } from '@angular/core';

import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class Add {
  faculty: string;
  crn: string;
  classes: Array<{title: string}>;
  waiting: Array<{title: string, position: number}>;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    this.classes = [{ title : "SENG 310" }, { title : "CSC 361" }, { title : "MATH 202" }, { title : "CSC 320" }];
    this.waiting = [{ title : "CSC 305", position : 15 }];
  }

  // #TODO ~ Send to course registration list here
  searchFaculty() {
    if (this.faculty == null) {
      return this.toastCtrl.create({
        message: "Select a faculty first",
        duration: 1500
      }).present();
    }
  }

  // Accepts only CRN 15819 and labels it as CSC 999
  registerCRN() {
    let msg = "Course number not recognized";
    if (this.crn === "15819") {
      if (!this.classes.filter( value => value.title === "CSC 999").length) {
        this.classes.push({ title : "CSC 999" });
        msg = "Successfully registered!";
      } else {
        msg = "Class already added!";
      }
    }
    this.crn = null;
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 1500
    });
    toast.present();
  }

}