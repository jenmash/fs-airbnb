interface RentalI {
  location: string,
  price: string,
  accomodation: string,
  image: string,
  id: number,
}

export class Rental implements RentalI { 
    public location: string;
    public price: string; 
    public accomodation: string;
    public image: string;
    public id: number;

    constructor (data?: RentalI) {
      if (data) {
        this.location = data.location;
        this.price = data.price;
        this.accomodation = data.accomodation;
        this.image = data.image;
        this.id = data.id;
      } else {
        this.id = 0;
        this.location = "";
        this.price = "";
        this.accomodation = "";
        this.image = "";
      }
    }
}
