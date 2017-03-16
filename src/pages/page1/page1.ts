import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
    fall_m: Array<{course_name: string, time: string}>;
    fall_t: Array<{course_name: string, time: string}>;
    fall_w: Array<{course_name: string, time: string}>;
    fall_r: Array<{course_name: string, time: string}>;
    fall_f: Array<{course_name: string, time: string}>;

    spring_m: Array<{course_name: string, time: string}>;
    spring_t: Array<{course_name: string, time: string}>;
    spring_w: Array<{course_name: string, time: string}>;
    spring_r: Array<{course_name: string, time: string}>;
    spring_f: Array<{course_name: string, time: string}>;


    constructor(public navCtrl: NavController) {
        this.fall_m = []
        this.fall_t = []
        this.fall_w = []
        this.fall_r = []
        this.fall_f = []

        this.fall_m.push({course_name: "SENG 310: Human Computer Interaction", time: "10:00-11:20 M, R"});
        this.fall_m.push({course_name: "CSC 320: Foundations of Computation Theory", time: "11:30-1:20 M, R"});
        this.fall_m.push({course_name: "CSC 360: Operating Systems", time: "3:30-4:20 M, T"});

        this.fall_t.push({course_name: "ASTR 101", time: "11:30-1:20 T, W, F"});
        this.fall_t.push({course_name: "SENG 360: Security Engineering", time: "3:30-4:20 T, W, F"});

        this.fall_w.push({course_name: "ASTR 101", time: "11:30-1:20 T, W, F"});
        this.fall_w.push({course_name: "SENG 360: Security Engineering", time: "3:30-4:20 T, W, F"});

        this.fall_r.push({course_name: "SENG 310: Human Computer Interaction", time: "10:00-11:20 M, R"});
        this.fall_r.push({course_name: "CSC 320: Foundations of Computation Theory", time: "11:30-1:20 M, R"});
        this.fall_r.push({course_name: "CSC 360: Operating Systems", time: "3:30-4:20 M, T"});

        this.fall_f.push({course_name: "ASTR 101", time: "11:30-1:20 T, W, F"});
        this.fall_f.push({course_name: "SENG 360: Security Engineering", time: "3:30-4:20 T, W, F"});

        this.spring_m = []
        this.spring_t = []
        this.spring_w = []
        this.spring_r = []
        this.spring_f = []

        this.spring_m.push({course_name: "SENG 310: Human Computer Interaction", time: "10:00-11:20 M, R"});
        this.spring_m.push({course_name: "CSC 320: Foundations of Computation Theory", time: "11:30-1:20 M, R"});
        this.spring_m.push({course_name: "CSC 360: Operating Systems", time: "3:30-4:20 M, T"});

        this.spring_t.push({course_name: "ASTR 102", time: "12:00-1:20 T, W, F"});

        this.spring_w.push({course_name: "ASTR 102", time: "12:00-1:20 T, W, F"});

        this.spring_r.push({course_name: "SENG 310: Human Computer Interaction", time: "10-11:20 M, R"});
        this.spring_r.push({course_name: "CSC 320: Foundations of Computation Theory", time: "11:30-1:20 M, R"});
        this.spring_r.push({course_name: "CSC 360: Operating Systems", time: "3:30-4:20 M, T"});

        this.spring_f.push({course_name: "ASTR 102", time: "12:00-1:20 T, W, F"});




    }

}
