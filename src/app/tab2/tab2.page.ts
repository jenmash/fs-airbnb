import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private navCtrl: NavController
  ) {}

  navToTab1() {
    this.navCtrl.navigateForward("tab1");
  }

}
