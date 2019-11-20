import { Product } from './../models/product';
import { Seller } from './../models/seller';
import { IProductService } from '../models/i-product-service';
import { Observable, of } from 'rxjs';
import { GetProductDetailsResponse } from '../models/get-product-details-response';
import { GetProductsListResponse } from '../models/get-products-list-response';

export class ProductMockService implements IProductService {
  productsList: Product[];

  constructor() {
    this.setDummyProductList();
  }

  AddProduct(product: Product): Observable<Product> {
    product.id = "P123";
    product.status = "Active";

    product.postDateTime = new Date("2018-06-06T00:00:00");
    product.expirationDate = new Date("2019-09-01");
    product.purchasedDate = new Date("2019-09-01");

    // set other details coming from web
    return of(product);
  }

  updateProduct(product: Product): Observable<Product> {
    let index;

    for (index = 0; index < this.productsList.length; index++) {
      if (this.productsList[index].id == product.id) {
        this.productsList[index] = product;
        break;
      }
    }
    console.log(this.productsList[index]);
    // set other details coming from web
    return of(this.productsList[index]);
  }

  GetMockPreview(product: Product): GetProductDetailsResponse {
    let sellerObj = new Seller();
    sellerObj.id = "1";
    sellerObj.firstName = "Nikita";
    sellerObj.lastName = "Narkhede"
    let productpreviewObj = new GetProductDetailsResponse();
    productpreviewObj.seller = sellerObj;
    productpreviewObj.product = product;
    return productpreviewObj;
  }

  setDummyProductList() {
    let product1 = new Product();
    product1.id = "1";
    product1.pickupAddress.line1 = "Satara";
    product1.pickupAddress.city = "USA";
    product1.pickupAddress.state = "Dubai";
    product1.name = "BMW 5 Series 530i Sedan, 2008, Petrol";
    product1.category = "cars";
    product1.description = "lorem ipsum";
    product1.postDateTime = new Date("2027-11-08T18:57:53.5594401+05:30");
    product1.heroImage = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product1.price.money.amount = 3200000;
    product1.price.money.currency = "INR";
    product1.price.isNegotiable = false;
    product1.images.push('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMt-5WaWAB5O048K8MS92uXbFpNmUvro38bH1lgoDmsRmo0hEJ');
    product1.images.push('https://cmsimages-alt.kbb.com/content/dam/kbb-editorial/make/rolls-royce/cullinan/2019-rolls-royce-cullinan-side.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg');
    product1.images.push('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMt-5WaWAB5O048K8MS92uXbFpNmUvro38bH1lgoDmsRmo0hEJ');

    let product2 = new Product();
    product2.id = "2";
    product2.pickupAddress.line1 = "Satara";
    product2.pickupAddress.city = "USA";
    product2.pickupAddress.state = "Dubai";
    product2.name = "Maruti Suzuki Baleno Alpha Diesel, 2016, Diesel";
    product2.category = "cars";
    product2.description = "one of the best options in its segmant with all safety features like airbags abs steering control adjustable steering keyless entry push button start company provided music system with navigation and bluetooth conectivity";
    product2.postDateTime = new Date("2018-06-06T00:00:00");
    product2.heroImage = "https://cmsimages-alt.kbb.com/content/dam/kbb-editorial/make/rolls-royce/cullinan/2019-rolls-royce-cullinan-side.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg";
    product2.price.money.amount = 3200000;
    product2.price.money.currency = "INR";
    product2.price.isNegotiable = true;
    product2.images.push('https://cmsimages-alt.kbb.com/content/dam/kbb-editorial/make/rolls-royce/cullinan/2019-rolls-royce-cullinan-side.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg');

    let product3 = new Product();
    product3.id = "3";
    product3.pickupAddress.line1 = "Satara";
    product3.pickupAddress.city = "USA";
    product3.pickupAddress.state = "Dubai";
    product3.name = "Fun stories about car and kids";
    product3.category = "cars";
    product3.description = "Just A Photo";
    product3.postDateTime = new Date("2018-06-06T00:00:00");
    product3.heroImage = "http://i.imgur.com/REM4kQUg.jpg";
    product3.price.money.amount = 3200000;
    product3.price.money.currency = "INR";
    product3.price.isNegotiable = true;
    product3.images.push('http://i.imgur.com/REM4kQUg.jpg');

    let product4 = new Product();
    product4.id = "4";
    product4.pickupAddress.line1 = "Satara";
    product4.pickupAddress.city = "USA";
    product4.pickupAddress.state = "Dubai";
    product4.name = "Hyundai I20 i20 Asta 1.2, 2014, Petrol";
    product4.category = "cars";
    product4.description = "Maruti Suzuki India Limited, formerly known as Maruti Udyog Limited, is an automobile manufacturer in India. It is a 56.21% owned subsidiary of the Japanese car and motorcycle manufacturer Suzuki Motor Corporation. As of July 2018, it had a market share of 53% of the Indian passenger car market.";
    product4.postDateTime = new Date("2018-06-06T00:00:00");
    product4.heroImage = "https://i.ytimg.com/vi/dsWxMoh3_50/maxresdefault.jpg";
    product4.price.money.amount = 3200000;
    product4.price.money.currency = "INR";
    product4.price.isNegotiable = true;
    product4.images.push('https://i.ytimg.com/vi/dsWxMoh3_50/maxresdefault.jpg');

    let product5 = new Product();
    product5.id = "5";
    product5.pickupAddress.line1 = "Satara";
    product5.pickupAddress.city = "USA";
    product5.pickupAddress.state = "Dubai";
    product5.name = "Maruti Suzuki Wagon R LXI, 2016, CNG & Hybrids";
    product5.category = "cars";
    product5.description = "Most Beautiful Car in The World";
    product5.postDateTime = new Date("2018-06-06T00:00:00");
    product5.heroImage = "https://image.shutterstock.com/image-photo/big-small-ripe-red-strawberry-260nw-642144988.jpg";
    product5.price.money.amount = 3200000;
    product5.price.money.currency = "INR";
    product5.price.isNegotiable = true;
    product5.images.push('https://image.shutterstock.com/image-photo/big-small-ripe-red-strawberry-260nw-642144988.jpg');

    let product6 = new Product();
    product6.id = "6";
    product6.pickupAddress.line1 = "Satara";
    product6.pickupAddress.city = "USA";
    product6.pickupAddress.state = "Dubai";
    product6.name = "Volkswagen Vento Highline Diesel AT, 2016, Diesel";
    product6.category = "cars";
    product6.description = "New Car";
    product6.postDateTime = new Date("2018-06-06T00:00:00");
    product6.heroImage = "https://cdn.vox-cdn.com/thumbor/qW3lRejqR7xJAG_FTdRyxjfbalA=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/65408496/tesla_model_3_0638.0.jpg";
    product6.price.money.amount = 3200000;
    product6.price.money.currency = "INR";
    product6.price.isNegotiable = true;
    product6.images.push('https://cdn.vox-cdn.com/thumbor/qW3lRejqR7xJAG_FTdRyxjfbalA=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/65408496/tesla_model_3_0638.0.jpg');

    let product7 = new Product();
    product7.id = "7";
    product7.pickupAddress.line1 = "Satara";
    product7.pickupAddress.city = "USA";
    product7.pickupAddress.state = "Dubai";
    product7.name = "Mercedes-Benz 2018 AMG GT C Roadster Convertible";
    product7.category = "cars";
    product7.description = "lorem ipsum";
    product7.postDateTime = new Date("2018-06-06T00:00:00");
    product7.heroImage = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product7.price.money.amount = 3200000;
    product7.price.money.currency = "INR";
    product7.price.isNegotiable = true;
    product7.images.push('https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');

    let product8 = new Product();
    product8.id = "8";
    product8.pickupAddress.line1 = "Satara";
    product8.pickupAddress.city = "USA";
    product8.pickupAddress.state = "Dubai";
    product8.name = "Mercedes-Benz 2018 AMG GT C Roadster Convertible";
    product8.category = "cars";
    product8.description = "lorem ipsum";
    product8.postDateTime = new Date("2018-06-06T00:00:00");
    product8.heroImage = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product8.price.money.amount = 3200000;
    product8.price.money.currency = "INR";
    product8.price.isNegotiable = true;
    product8.images.push('https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');

    let product9 = new Product();
    product9.id = "9";
    product9.pickupAddress.line1 = "Satara";
    product9.pickupAddress.city = "USA";
    product9.pickupAddress.state = "Dubai";
    product9.name = "Mercedes-Benz 2018 AMG GT C Roadster Convertible";
    product9.category = "cars";
    product9.description = "lorem ipsum";
    product9.postDateTime = new Date("2018-06-06T00:00:00");
    product9.heroImage = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product9.price.money.amount = 3200000;
    product9.price.money.currency = "INR";
    product9.price.isNegotiable = true;
    product9.images.push('https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');

    let product10 = new Product();
    product10.id = "10";
    product10.pickupAddress.line1 = "Satara";
    product10.pickupAddress.city = "USA";
    product10.pickupAddress.state = "Dubai";
    product10.name = "Mercedes-Benz 2018 AMG GT C Roadster Convertible";
    product10.category = "cars";
    product10.description = "lorem ipsum";
    product10.postDateTime = new Date("2018-06-06T00:00:00");
    product10.heroImage = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product10.price.money.amount = 3200000;
    product10.price.money.currency = "INR";
    product10.price.isNegotiable = true;
    product10.images.push('https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');

    let product11 = new Product();
    product11.id = "11";
    product11.pickupAddress.line1 = "Satara";
    product11.pickupAddress.city = "USA";
    product11.pickupAddress.state = "Dubai";
    product11.name = "Mercedes-Benz 2018 AMG GT C Roadster Convertible";
    product11.category = "cars";
    product11.description = "lorem ipsum";
    product11.postDateTime = new Date("2018-06-06T00:00:00");
    product11.heroImage = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product11.price.money.amount = 3200000;
    product11.price.money.currency = "INR";
    product11.price.isNegotiable = true;
    product11.images.push('https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');

    let product12 = new Product();
    product12.id = "12";
    product12.pickupAddress.line1 = "Satara";
    product12.pickupAddress.city = "USA";
    product12.pickupAddress.state = "Dubai";
    product12.name = "Mercedes-Benz 2018 AMG GT C Roadster Convertible";
    product12.category = "cars";
    product12.description = "lorem ipsum";
    product12.postDateTime = new Date("2018-06-06T00:00:00");
    product12.heroImage = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product12.price.money.amount = 3200000;
    product12.price.money.currency = "INR";
    product12.price.isNegotiable = true;
    product12.images.push('https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');

    let product13 = new Product();
    product13.id = "13";
    product13.pickupAddress.line1 = "Satara";
    product13.pickupAddress.city = "USA";
    product13.pickupAddress.state = "Dubai";
    product13.name = "Mercedes-Benz 2018 AMG GT C Roadster Convertible";
    product13.category = "cars";
    product13.description = "lorem ipsum";
    product13.postDateTime = new Date("2018-06-06T00:00:00");
    product13.heroImage = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product13.price.money.amount = 3200000;
    product13.price.money.currency = "INR";
    product13.price.isNegotiable = true;
    product13.images.push('https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');

    this.productsList = [
      product1, product2, product3, product4, product5, product6, product7,
      product8, product9, product10, product11, product12, product13
    ];
  }

  getDummyProductList(): Product[] {
    return this.productsList;
  }

  getDummyProductDetails(productId): GetProductDetailsResponse {
    let productObj = new Product();
    productObj = this.searchProduct(productId);

    if (!productObj) {
      return null;
    }
    else {
      let sellerObj = new Seller();
      sellerObj.id = "1";
      sellerObj.firstName = "Nikita";
      sellerObj.lastName = "Narkhede";
      let productDetailsObj = new GetProductDetailsResponse();
      productDetailsObj.seller = sellerObj;
      productDetailsObj.product = productObj;
      return productDetailsObj;
    }

  }

  searchProduct(productId: string): Product {
    let productList = this.getDummyProductList();

    for (let product of productList) {
      if (product.id == productId) {
        return product;
      }
    }
    return null;
  }

  getProductDetails(
    productId: string
  ): Observable<GetProductDetailsResponse> {
    var getProductDetailsResponse = new GetProductDetailsResponse();
    getProductDetailsResponse = this.getDummyProductDetails(productId);
    return of(getProductDetailsResponse);
  }

  getProductsList(
    pageNumber: number,
    pageSize: number
  ): Observable<GetProductsListResponse> {
    var getProductsListResponse = new GetProductsListResponse();
    getProductsListResponse.products = this.getDummyProductList();
    return of(getProductsListResponse);
  }

  getDummyActiveUserProducts(): Product[] {
    let product1 = new Product();
    product1.id = "3";
    product1.pickupAddress.line1 = "Nashik Road";
    product1.pickupAddress.city = "Nashik ";
    product1.pickupAddress.state = "Maharshtra";
    product1.name = "Fun stories about car and kids";
    product1.category = "cars";
    product1.description = "Just A Photo";
    product1.postDateTime = new Date();
    product1.heroImage = "http://i.imgur.com/REM4kQUg.jpg";
    product1.price.money.amount = 730000;
    product1.price.money.currency = "INR";
    product1.price.isNegotiable = true;
    product1.images.push('http://i.imgur.com/REM4kQUg.jpg');

    let product2 = new Product();
    product2.id = "4";
    product2.pickupAddress.line1 = "Kothrud Paschima Nagri";
    product2.pickupAddress.city = "Pune";
    product2.pickupAddress.state = "Maharshtra";
    product2.name = "Hyundai I20 i20 Asta 1.2, 2014, Petrol";
    product2.category = "cars";
    product2.description = "Maruti Suzuki India Limited, formerly known as Maruti Udyog Limited, is an automobile manufacturer in India. It is a 56.21% owned subsidiary of the Japanese car and motorcycle manufacturer Suzuki Motor Corporation. As of July 2018, it had a market share of 53% of the Indian passenger car market.";
    product2.postDateTime = new Date();
    product2.heroImage = "https://i.ytimg.com/vi/dsWxMoh3_50/maxresdefault.jpg";
    product2.price.money.amount = 6800000;
    product2.price.money.currency = "INR";
    product2.price.isNegotiable = true;
    product2.images.push('https://i.ytimg.com/vi/dsWxMoh3_50/maxresdefault.jpg');

    let itemList: Product[] = [product1, product2];
    return itemList;
  }

  getDummyInactiveUserProducts(): Product[] {
    let product1 = new Product();
    product1.id = "5";
    product1.pickupAddress.line1 = "Baner";
    product1.pickupAddress.city = "Pune";
    product1.pickupAddress.state = "Maharshtra";
    product1.name = "Maruti Suzuki Wagon R LXI, 2016, CNG & Hybrids";
    product1.category = "cars";
    product1.description = "Most Beautiful Car in The World";
    product1.postDateTime = new Date();
    product1.heroImage = "https://image.shutterstock.com/image-photo/big-small-ripe-red-strawberry-260nw-642144988.jpg";
    product1.price.money.amount = 460000;
    product1.price.money.currency = "INR";
    product1.price.isNegotiable = true;
    product1.images.push('https://image.shutterstock.com/image-photo/big-small-ripe-red-strawberry-260nw-642144988.jpg');

    let product2 = new Product();
    product2.id = "6";
    product2.pickupAddress.line1 = "Dombivali";
    product2.pickupAddress.city = "Mumbai";
    product2.pickupAddress.state = "Maharashtra";
    product2.name = "Volkswagen Vento Highline Diesel AT, 2016, Diesel";
    product2.category = "cars";
    product2.description = "New Car";
    product2.postDateTime = new Date();
    product2.heroImage = "https://cdn.vox-cdn.com/thumbor/qW3lRejqR7xJAG_FTdRyxjfbalA=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/65408496/tesla_model_3_0638.0.jpg";
    product2.price.money.amount = 8600000;
    product2.price.money.currency = "INR";
    product2.price.isNegotiable = true;
    product2.images.push('https://cdn.vox-cdn.com/thumbor/qW3lRejqR7xJAG_FTdRyxjfbalA=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/65408496/tesla_model_3_0638.0.jpg');

    let itemList: Product[] = [product1, product2];
    return itemList;
  }

  getActiveUserProducts(
    userId: string
  ): Observable<GetProductsListResponse> {
    if (userId != "777888666") {
      return null;
    }
    var getProductsListResponse = new GetProductsListResponse();
    getProductsListResponse.products = this.getDummyActiveUserProducts();
    return of(getProductsListResponse);
  }

  getInactiveUserProducts(
    userId: string
  ): Observable<GetProductsListResponse> {
    if (userId != "777888666") {
      return null;
    }
    var getProductsListResponse = new GetProductsListResponse();
    getProductsListResponse.products = this.getDummyInactiveUserProducts();
    return of(getProductsListResponse);
  }
}
