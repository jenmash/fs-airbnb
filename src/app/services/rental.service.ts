import { Injectable } from '@angular/core';
import { Rental } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  public rentals: Array<Rental>;

  constructor() { }

  getAllRentals() {
    let rentallisbon = new Rental({
      id: 1,
      location: "Lisbon",
      price: "450 USD",
      accomodation: "Nata Hotel",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlNcqSWMq7v0cfgWiyiNaZRLf_a-iMHfVqsAHuU6yvtODcG57",
    });

    let rentalparis = new Rental({
      id: 2,
      location: "Paris",
      price: "500 uSD",
      accomodation: "Hotel de Fleurs",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqJQ6xJRCUuzECPAwOhin50rrm2s6ZHSC2B40Kc2Euj_9W8T7",
    });

    this.rentals = [ rentallisbon, rentalparis ];
  }

  // Returns null if not found.
  findRentalById(id: number): Rental {
    this.rentals.forEach((rental: Rental) => {
      if (rental.id == id) {
        return rental;
      }
    });

    return null;
  }
}
