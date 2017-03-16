import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { NavController, ModalController, ToastController } from 'ionic-angular';
//import { Info } from '../info/info';
import { classinfo } from '../classinfo/classinfo';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})

export class Register {
  selectedItem: any;
  public icon: boolean;
 // items: Array<{title: string, note: string, icon: string}>;
  classes: Array<{title: string, place: number, icon: boolean}>;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private http: Http, public toastCtrl: ToastController) {
	// If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('item');

   this.classes = [{ title: "SENG 310", place:1, icon:false}, { title: "CSC 361",place:2, icon:false}, { title: "MATH 202",place:3, icon:false}, { title: "CSC 320",place:4, icon:false}];
	 /*
    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
    */
  }
  
  itemClicked(event, item) {
    this.navCtrl.push(classinfo, {
     item: item
    })
  }
  
  
}
