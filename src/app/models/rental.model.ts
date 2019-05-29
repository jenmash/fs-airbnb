export class rental { 
    public location: string;
    public price: number; 
    public accomodation: string;
    public image: string;

    constructor (loc: string, p: number, room: string, img: string) {
        this.location=loc;
        this.price=p;
        this.accomodation=room;
        this.image=img;

    }

}
