export class Product {
 
  public title: string;
  public category: string;
  public price: number;
  public description: string;
  public dateOfPurchase: Date;
  public isNegotiable: boolean;
  public line1: string;
  public line2: string;
  public city: string;
  public pincode: number;
  public state: string;
  public heroImageUrl: string;
  public imageUrl: string[];
  

    constructor() {
      this.title="";
      this.category="";
      this.description="";
      this.isNegotiable=false;
      this.line1="";
      this.line2="";
      this.city="";
      this.heroImageUrl="";
      this.imageUrl=[];
      }
  
  }