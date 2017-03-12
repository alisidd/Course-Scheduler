import { Component, Input } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  @Input() term;
  constructor(public navCtrl: NavController) {
    this.term = "fall" // Set default
  }

}
