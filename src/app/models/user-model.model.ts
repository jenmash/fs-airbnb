
export class User {
    public firstname: string; 
    public lastname: string;
    private rentals: Array<string>;

    constructor (fname: string, lname:string) {
        this.firstname=fname;
        this.lastname=lname;
        this.rentals = new Array<string>();
    }
    

    
     }

