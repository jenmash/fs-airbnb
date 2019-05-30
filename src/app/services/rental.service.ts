import { Injectable } from '@angular/core';
import { Rental } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RentalService {


  public rentals: Array<Rental> = [];

  constructor() { }



  getAllRentals() {
    this.rentals = [];

    let rentallisbon = new Rental();
    rentallisbon.id = 1;
    rentallisbon.location = "Lisbon";
    rentallisbon.price= "450 USD";
    rentallisbon.accomodation = "Nata Hotel";
    rentallisbon.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlNcqSWMq7v0cfgWiyiNaZRLf_a-iMHfVqsAHuU6yvtODcG57";

    let rentalparis = new Rental();
    rentalparis.id = 2;
    rentalparis.location= "Paris";
    rentalparis.price= "500 uSD"
    rentalparis.accomodation = "Hotel de Fleurs"
    rentalparis.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqJQ6xJRCUuzECPAwOhin50rrm2s6ZHSC2B40Kc2Euj_9W8T7"

    this.rentals.push(rentallisbon);
    this.rentals.push(rentalparis);
  }

  // Returns null if not found.
  findRentalById(id: number): Rental {
    let foundRental: Rental = null;

    this.rentals.forEach(
      (rental: Rental) => {
        if (rental.id == id) {
          foundRental = rental;
        }
      }
    );

    return foundRental;
  }

}
