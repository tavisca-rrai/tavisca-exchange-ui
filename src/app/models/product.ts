import { Price } from './price';
import { Address } from './address';

export class Product {
  public id: string;
  public title: string;
  public category: string;
  public description: string;
  public heroImageUrl: string;
  public imageUrls:string[]=[];
  public price=new Price();
  public address = new Address();
  public status: string;
  public postDate: Date;
  public expirationDate: Date;
  public purchaseDate: Date;
}