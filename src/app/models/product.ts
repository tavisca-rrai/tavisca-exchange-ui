import { Price } from './price';
import { Address } from './address';

export class Product {
  public title: string;
  public category: string;
  public description: string;
  public dateOfPurchase: Date;
  public heroImageUrl: string;
  public imageUrl: string[];
  public price=new Price();
  public address=new Address();

  constructor(title, category, price, description, dateofpurchase, heroimageurl, address, imageurl)
  {
    this.title = title;
    this.price = price;
    this.description = description;
    this.address = address;
    this.dateOfPurchase = dateofpurchase;
    this.heroImageUrl = heroimageurl;
    this.imageUrl = imageurl;
    this.category = category;
  }
}
