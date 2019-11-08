import { Price } from './price';
import { Address } from './address';

export class Product {
  public sellerId : string;
  public id: string;
  public Name: string;
  public category: string;
  public description: string;
  public heroImageUrl: string;
  public imageUrls:string[]=[];
  public price=new Price();
  public pickupAddress = new Address();
  public status: string;
  public postDate: Date;
  public expirationDate: Date;
  public purchasedDate: Date;
}