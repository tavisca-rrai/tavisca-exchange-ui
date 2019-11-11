import { Price } from './price';
import { Address } from './address';
import { Product } from "./product";
import {Seller}  from "./seller";

export class Preview {
  // public title: string;
  // public category: string;
  // public description: string;
  // public heroImageUrl: string;
  // public imageUrls:string[]=[];
  // public price=new Price();
  // public address = new Address();
  // public status: string;
  // public postDate: Date;
  // public expirationDate: Date;
  // public purchaseDate: Date;
  public product : Product = new Product();
  public seller: Seller = new Seller();
}