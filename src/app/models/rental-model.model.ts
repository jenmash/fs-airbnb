interface RentalI {
  location: string,
  pricePerNight: string,
  accomodation: string,
  description: string,
  id: number
}

export class Rental implements RentalI {
  pricePerNight: string;
  description: string; 
    public location: string;
    public price: string; 
    public accomodation: string;
    public image: string;
    public id: number;

    constructor (data?: RentalI) {
      if (data) {
        this.location = data.location;
        this.price = data.pricePerNight;
        this.accomodation = data.accomodation;
        this.description = data.description;
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
