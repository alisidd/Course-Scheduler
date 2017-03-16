import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Register } from '../Register/Register';

@Component({
  selector: 'page-classinfo',
  templateUrl: 'classinfo.html'
})
export class classinfo {
  selectedItem: any;
  icons: string[];
  title: string[];
  icons2: string[];
  items: Array<{title: string, note: string, icon: string, icon1: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['checkmark'];
	this.icons2 = ['checkmark']
	this.title = ['CSC360', 'CSC370', 'CSC380'];
	
    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: this.title[Math.floor(Math.random() * this.title.length)],
        note: '',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)],
		icon1: this.icons2[Math.floor(Math.random() * this.icons2.length)]
      });
    }
  }
}
