import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Rental, User } from '../models/index';
import { RentalService } from '../services/rental.service';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {


  public rentals: Array<any> = [];

  constructor(
    private navCtrl: NavController,
    private rentalService: RentalService,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {

    this.httpClient.get("http://localhost:3000/properties").subscribe((response: any) => {
      console.log(response);
      this.rentals = response;
      // JSON.parse(JSON.stringify(response))
      console.log("transferred array");
      console.log(this.rentals);
      //     for( var k=0; k < this.rentals.length; k++)  {


    });


  //   console.log("tab1 before get rentals", this.rentalService);
  //   this.rentalService.getAllRentals();
  //   this.rentals = this.rentalService.rentals; 
  //   console.log("tab1 after get rentals", this.rentals);
  // }
  };


navToTab1() {
  this.navCtrl.navigateForward("tab1");
  
}

navToRental(rental: Rental) {
  localStorage.setItem("rental_id", ""+rental.id);
  this.navCtrl.navigateForward("rental", {
    queryParams: {
      rentalId: rental.id,
      title: rental.id,
      description: rental.description,
      location: rental.location,
      pricePerNight: rental.pricePerNight

    }
  })
  //   queryParams: {
  //     rentalId: rental.id
    }
//   });
// }
// }
}
