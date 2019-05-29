import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { getHostElement } from '@angular/core/src/render3';
import { rental, User } from '../models/index';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  public rentals: Array<rental>;

  constructor(
    private navCtrl: NavController
  ) {
    let Lisbon= new rental("Lisbon", 450, "Nata Hotel", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlNcqSWMq7v0cfgWiyiNaZRLf_a-iMHfVqsAHuU6yvtODcG57");
    this.rentals = new Array();
    this.rentals.push(Lisbon);

    let Paris = new rental("Paris", 500, "Hotel", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGYjJAAY2i35rR0U8Jo-G_zQwvRbbT1JWiG8ako3a3YZdUXe4V");
    this.rentals.push(Paris);
  }

  navToTab1() {
    this.navCtrl.navigateForward("tab1");
}

navToRental() {
  this.navCtrl.navigateForward("rental");
}

ngOnInit() {

}


}
