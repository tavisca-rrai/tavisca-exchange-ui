import { Price } from './price';
import { Address } from './address';

export class Product {
  public sellerId : string;
  public id: string;
  public name: string;
  public category: string;
  public description: string;
  public heroImage: string;
  public imageUrls:string[]=[];
  public price=new Price();
  public pickupAddress = new Address();
  public status: string;
  public postDateTime: string;
  public expirationDate: Date;
  public purchasedDate: Date;
}