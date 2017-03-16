import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { NavController, ModalController, ToastController, NavParams, ViewController } from 'ionic-angular';
import { Info } from '../info/info';
import { Register } from '../Register/Register';
import { classinfo } from '../classinfo/classinfo';

@Component({
	selector: 'page-add',
	templateUrl: 'add.html'
})
export class Add {
	faculty: string;
	crn: string;
	classes: Array<{title: string}>;
	waiting: Array<{title: string, position: number}>;
	constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private http: Http, public toastCtrl: ToastController) {
		this.classes = [{ title: "SENG 310" }, { title: "CSC 361" }, { title: "MATH 202" }, { title: "CSC 320" }];
		this.waiting = [{ title: "CSC 305", position: 15 }];
	}

	listCourses(type: string) {
		this.navCtrl.push(Register, {
			type: type
		});
	}

	searchFaculty() {
		if (this.faculty == null) {
			return this.toastCtrl.create({
				message: "Select a faculty first",
				duration: 1500
			}).present();
		}
		
		this.navCtrl.push(Register, {
			type: this.faculty
		}); 
	}

	// Accepts only CRN 15819 and labels it as CSC 999
	registerCRN() {
		let msg = "Course number not recognized";
		if (this.crn === "15819") {
			if (!this.classes.filter( value => value.title === "CSC 999")) {
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

	classInfo(course) {
		let modal = this.modalCtrl.create(Info, course);
		modal.present();
		// this.navCtrl.push(courseInfo, course);
	}

	classpage(course){
		this.navCtrl.push(classinfo); 
	}

}