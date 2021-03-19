import { Component, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { SuperTabs } from '@ionic-super-tabs/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements AfterViewInit {

  @Output() goToTab = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  	console.log("ProfilePage loaded")
  }

  navigateToTab(){

  	this.goToTab.emit(0)// par example navigate to first tab  index = 0
  }

}
