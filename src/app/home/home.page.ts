import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { SuperTabsConfig } from '@ionic-super-tabs/core';
import { ContactsPage } from '../contacts/contacts.page';
import { ProfilePage } from '../profile/profile.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  contactsPage = ContactsPage;
  profilePage = ProfilePage;
  opts = {
    icon: false,
    label: true,
    toolbarPos: 'top',
    scrollable: true,
  };

  config: SuperTabsConfig = {
    debug: true,
    allowElementScroll: false,
  };

  tabs: any[] = [];

  ngAfterViewInit() {
    console.log('Super tabs', this.superTabs);
    // this.superTabs.selectTab(1);
    console.log(this.superTabs.activeTabIndex)
  }
  animateOnTabChange(e){
    
    console.log("animateOnTabChange")
    console.log(e)

    // example to animate tab with index=1
    if(e.detail.index == 1){
      document.getElementById('animate-me').classList.add("swirl-in-fwd");
    }else{
      document.getElementById('animate-me').classList.remove("swirl-in-fwd");
    }

  // u can do that for every tab like in above .....


  }
  goToTab2(){
    this.superTabs.selectTab(1);
  }

  goToTab(index) {
    this.superTabs.selectTab(index);
  }
}
