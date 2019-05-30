import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Rental, User } from '../models/index';
import { RentalService } from '../services/rental.service' ;


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public rentals: Array<Rental> = [];

  constructor(
    private navCtrl: NavController,
    private rentalService: RentalService
  ) {
    console.log(this.rentalService);
    this.rentalService.getAllRentals();
    this.rentals = this.rentalService.rentals; 
  }

  navToTab1() {
    this.navCtrl.navigateForward("tabs/tabs/tab1");

  }

navToRental(rental: Rental) {
  this.navCtrl.navigateForward("rental", {
    queryParams: {
      q: "ionic",
      rentalId: rental.id,
      

    }
  });
}
}



