import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { NavParams, Platform, ViewController } from 'ionic-angular';

@Component({
  selector : 'page-info',
  templateUrl : 'info.html'
})
export class Info {
  course: {
    title   : string,
    name    : string,
    times   : { start: number, end: number, days: string },
    location: string,
    prof    : string,
    rmp     : number,
    friends : [string],
    opreq   : [string],
    done    : [string],
    req     : [string],
    avg     : number,
    expect  : number,
    diff    : number
  };
  timeString: [string];
  allCourses: [any];
  constructor(public navParams: NavParams, private http: Http, public platform: Platform, public viewCtrl: ViewController) {
    this.course = { title: "", name: "", times: { start: 0, end: 0, days: "" }, location: "", prof: "", rmp: 0, friends: [""], opreq: [""], done: [""], req: [""], avg: 0, expect: 0, diff: 0};
    this.http.get('assets/classes.json').subscribe( res => {
      this.allCourses = res.json()
      this.course = this.allCourses.find( value => value.title === navParams.get('title'));
      let start = numTimeToString(this.course.times.start);
      let end = numTimeToString(this.course.times.start);
      this.timeString = [
        "Every Week",
        `${start} - ${end}`,
        `${this.course.times.days} ${this.course.location}`,
        "Lecture",
        this.course.prof
      ]
    });
  }

  dismiss(register: Boolean) {
    this.viewCtrl.dismiss(register);
  }

  
}


function numTimeToString(time : number) : string {
  let formatted: string;
  if (time < 1200) formatted = time.toString() + " am";
  else if (time < 1300) formatted = time.toString() + " pm";
  else formatted = (time - 1200).toString() + " pm";
  return formatted.substr(0, 2) + ":" + formatted.substr(2);
}