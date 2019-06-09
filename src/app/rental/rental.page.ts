import { Component, OnInit } from '@angular/core';
import { Rental, User } from '../models/index';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RentalService } from '../services/rental.service';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-rental',
  templateUrl: './rental.page.html',
  styleUrls: ['./rental.page.scss'],
})
export class RentalPage implements OnInit {

  private rentalId: number;
  public nameOfRental: string;
  public currentRental: Rental;

  public rentals: Array<Rental>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private rentalService: RentalService,
    private navCtrl: NavController,
    private httpClient: HttpClient
  ){

    this.rentalService.getAllRentals();
  }
      

  ngOnInit() {


    var rentalId = parseInt(localStorage.getItem("rental_id"));
    console.log("The rental id is: " + rentalId);

    this.httpClient.get('http://localhost:3000/properties/' + rentalId ).subscribe ( (response: any) => {
      console.log(response);
      this.currentRental = response[0];
    });
  
  }
    


//     let arrow = (data: any) => {
//       this.nameOfRental = data.params.rentalName;
//       this.rentalId = data.params.rentalId;



//       this.currentRental = 
//       this.rentalService.findRentalById(this.rentalId);
    
//     if (!this.currentRental) {
//       alert("Rental not found!");
//       this.navCtrl.navigateBack("");
//     }
//   };

//   this.activatedRoute.queryParamMap.subscribe(
//     // receivedQueryParams,
//     arrow
//   );

//   }

}

