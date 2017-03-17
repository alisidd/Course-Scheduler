import { Component, Input } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Classinfo } from '../classinfo/classinfo';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class Schedule {
    fall_m: Array<{title: string, course_name: string, time: string}>;
    fall_t: Array<{title: string, course_name: string, time: string}>;
    fall_w: Array<{title: string, course_name: string, time: string}>;
    fall_r: Array<{title: string, course_name: string, time: string}>;
    fall_f: Array<{title: string, course_name: string, time: string}>;

    spring_m: Array<{title: string, course_name: string, time: string}>;
    spring_t: Array<{title: string, course_name: string, time: string}>;
    spring_w: Array<{title: string, course_name: string, time: string}>;
    spring_r: Array<{title: string, course_name: string, time: string}>;
    spring_f: Array<{title: string, course_name: string, time: string}>;

    @Input() term;
    @Input() day;
    constructor(public navCtrl: NavController) {
        this.term = 'fall';
        this.day = 'M';
        this.fall_m = []
        this.fall_t = []
        this.fall_w = []
        this.fall_r = []
        this.fall_f = []

        this.fall_m.push({title: "SENG 310", course_name: "SENG 310: Human Computer Interaction", time: "10:00-11:20 M, R"});
        this.fall_m.push({title: "CSC 320",course_name: "CSC 320: Foundations of Computation Theory", time: "11:30-1:20 M, R"});
        this.fall_m.push({title: "CSC 360",course_name: "CSC 360: Operating Systems", time: "3:30-4:20 M, T"});

        this.fall_t.push({title: "ASTR 101", course_name: "ASTR 101", time: "11:30-1:20 T, W, F"});
        this.fall_t.push({title: "SENG 360", course_name: "SENG 360: Security Engineering", time: "3:30-4:20 T, W, F"});

        this.fall_w.push({title: "ASTR 101", course_name: "ASTR 101", time: "11:30-1:20 T, W, F"});
        this.fall_w.push({title: "SENG 360", course_name: "SENG 360: Security Engineering", time: "3:30-4:20 T, W, F"});

        this.fall_r.push({title: "SENG 310", course_name: "SENG 310: Human Computer Interaction", time: "10:00-11:20 M, R"});
        this.fall_r.push({title: "CSC 320", course_name: "CSC 320: Foundations of Computation Theory", time: "11:30-1:20 M, R"});
        this.fall_r.push({title: "CSC 360", course_name: "CSC 360: Operating Systems", time: "3:30-4:20 M, T"});

        this.fall_f.push({title: "ASTR 101", course_name: "ASTR 101", time: "11:30-1:20 T, W, F"});
        this.fall_f.push({title: "SENG 360", course_name: "SENG 360: Security Engineering", time: "3:30-4:20 T, W, F"});

        this.spring_m = []
        this.spring_t = []
        this.spring_w = []
        this.spring_r = []
        this.spring_f = []

        this.spring_m.push({title: "SENG 310", course_name: "SENG 310: Human Computer Interaction", time: "10:00-11:20 M, R"});
        this.spring_m.push({title: "CSC 320", course_name: "CSC 320: Foundations of Computation Theory", time: "11:30-1:20 M, R"});
        this.spring_m.push({title: "CSC 360", course_name: "CSC 360: Operating Systems", time: "3:30-4:20 M, T"});

        this.spring_t.push({title: "ASTR 102", course_name: "ASTR 102", time: "12:00-1:20 T, W, F"});

        this.spring_w.push({title: "ASTR 102", course_name: "ASTR 102", time: "12:00-1:20 T, W, F"});

        this.spring_r.push({title: "SENG 310", course_name: "SENG 310: Human Computer Interaction", time: "10-11:20 M, R"});
        this.spring_r.push({title: "CSC 320", course_name: "CSC 320: Foundations of Computation Theory", time: "11:30-1:20 M, R"});
        this.spring_r.push({title: "CSC 360", course_name: "CSC 360: Operating Systems", time: "3:30-4:20 M, T"});

        this.spring_f.push({title: "ASTR 102", course_name: "ASTR 102", time: "12:00-1:20 T, W, F"});
    }
    
    itemTapped(event, course) {
        this.navCtrl.push(Classinfo)
    }
}
