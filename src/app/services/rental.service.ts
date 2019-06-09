import { Injectable } from '@angular/core';
import { Rental } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  public rentals: Array<Rental> = [];

  constructor(private httpClient: HttpClient) { }

  getAllRentals() {
    this.httpClient.get("http://localhost:3000/properties/allproperties").subscribe((response) => {
      this.rentals = JSON.parse(JSON.stringify(response));
    })
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
