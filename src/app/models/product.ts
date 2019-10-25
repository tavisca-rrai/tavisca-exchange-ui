import { Price } from './price';
import { Address } from './address';

export class Product {
    public title: string;
    public category: string;
    public description: string;
    public dateOfPurchase: Date;
    public heroImageUrl: string;
    public imageUrl = [];
    public price = new Price();
    public address = new Address();
    public status: string;
    public postDate: string;
    public expirationDate: string;
    public purchaseDate: string;
}