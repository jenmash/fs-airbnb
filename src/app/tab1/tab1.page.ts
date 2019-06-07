import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Rental, User } from '../models/index';
import { RentalService } from '../services/rental.service' ;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
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
    this.navCtrl.navigateForward("tab1");
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
