export class Product {
 
    public title: string;
    public category: string;
    public price: number;
    public description: string;
    public dateOfPurchase: Date;
    public isNegotiable: boolean;
 
    Price: {
        amount : number,
        isNegotiable : boolean
    }
 
    Address : {
        line1: string;
        line2: string;
        city: string;
        pincode: number;
        state: string;
    }
    public heroImageUrl: string;
    public imageUrl: string[];
    
    constructor() 
    {
    }
    
}
    
