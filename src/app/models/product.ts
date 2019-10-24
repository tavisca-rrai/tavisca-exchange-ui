import { Price } from './price';
import { Address } from './address';

export class Product {
 
    public title: string;
    public category: string;
    public description: string;
    public dateOfPurchase: Date;
    public isNegotiable: boolean;
    public heroImageUrl: string;
    public imageUrl: string[];
    public price : Price;
    public address : Address;
    constructor() {
        this.price = new Price();  
        this.address = new Address();
    }
    
}