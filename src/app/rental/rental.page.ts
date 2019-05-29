import { Component, OnInit } from '@angular/core';
import { rental, User } from '../models/index';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.page.html',
  styleUrls: ['./rental.page.scss'],
})
export class RentalPage implements OnInit {

  public rentals: Array<rental>;

  constructor() { 
      
      let Lisbon= new rental("Lisbon", 450, "Nata Hotel", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlNcqSWMq7v0cfgWiyiNaZRLf_a-iMHfVqsAHuU6yvtODcG57");
      this.rentals = new Array();
      this.rentals.push(Lisbon);
  
      let Paris = new rental("Paris", 500, "Hotel", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGYjJAAY2i35rR0U8Jo-G_zQwvRbbT1JWiG8ako3a3YZdUXe4V");
      this.rentals.push(Paris);
  
  }

  ngOnInit() {
  }

}
