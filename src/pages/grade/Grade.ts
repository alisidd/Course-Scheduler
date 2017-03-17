import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-Grade',
  templateUrl: 'Grade.html'
})
export class Grade {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['aperture'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Class:' + i,
        note: 'Grade is: 100%',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }
}
