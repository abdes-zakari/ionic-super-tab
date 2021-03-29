import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  contacts: any[] = [];

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.contacts.push({
        name: `Contact #${i}`,
        phoneNumber: `647-555-5555`,
      });
    }
  }

  ngOnInit() {

    console.log('Start Contact Page ')

  }

  onRefresh(ev: any) {
    setTimeout(() => ev.detail.complete(), 1000);
  }

}
