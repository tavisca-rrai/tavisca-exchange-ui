import { Product } from './../models/product';
import { Seller } from './../models/seller';
import { IproductService } from '../models/iproduct-service';
import { ProductDetails } from './../models/product-details';
import { Observable, of } from 'rxjs';
import { GetProductDetailsResponse } from '../models/get-product-details-response';
import { GetProductsListResponse } from '../models/get-products-list-response';
import { Preview } from '../models/preview';

export class ProductMockService implements IproductService {

  constructor() { }

  AddProduct(product: Product): Observable<Product> {
    product.id = "P123";
    product.status = "Active"; 

    product.postDate = new Date("2019-09-01");
    product.expirationDate = new Date("2019-09-01");
    product.purchaseDate = new Date("2019-09-01");

    // set other details coming from web
    return of(product);
  }
  GetPreview(product: Product): Preview 
  {
    let sellerObj = new Seller();
    sellerObj.id = "1";
    sellerObj.name = "Nikita Narkhede";
    if (!product) 
    {
      return null;
    }

    let productpreviewObj = new Preview();
    productpreviewObj.seller = sellerObj;
    productpreviewObj.product = product;
    for (let productImage in product.imageUrls) 
    {
      productpreviewObj.product.imageUrls.push(product.imageUrls[productImage]);
    }
    return productpreviewObj;
  }

  getDummyProductList(): Product[] {
    let product1 = new Product();
    product1.id = "1";
    product1.address.line1 = "Nagpur";
    product1.address.city = "Nagpur";
    product1.address.state = "Maharashtra";
    product1.title = "BMW 5 Series 530i Sedan, 2008, Petrol";
    product1.category = "cars";
    product1.description = "lorem ipsum";
    product1.postDate = new Date();
    product1.heroImageUrl = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product1.price.amount = 3200000;
    product1.price.isNegotiable = false;
    product1.imageUrls.push('https://cmsimages-alt.kbb.com/content/dam/kbb-editorial/make/rolls-royce/cullinan/2019-rolls-royce-cullinan-side.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg');
    product1.imageUrls.push('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMt-5WaWAB5O048K8MS92uXbFpNmUvro38bH1lgoDmsRmo0hEJ');

    let product2 = new Product();
    product2.id = "2";
    product2.address.line1 = "Dombivli";
    product2.address.city = "Thane";
    product2.address.state = "Maharashtra";
    product2.title = "Maruti Suzuki Baleno Alpha Diesel, 2016, Diesel";
    product2.category = "cars";
    product2.description = "one of the best options in its segmant with all safety features like airbags abs steering control adjustable steering keyless entry push button start company provided music system with navigation and bluetooth conectivity";
    product2.postDate = new Date();
    product2.heroImageUrl = "https://cmsimages-alt.kbb.com/content/dam/kbb-editorial/make/rolls-royce/cullinan/2019-rolls-royce-cullinan-side.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg";
    product2.price.amount = 6800000;
    product2.price.isNegotiable = true;
    product2.imageUrls.push('https://cmsimages-alt.kbb.com/content/dam/kbb-editorial/make/rolls-royce/cullinan/2019-rolls-royce-cullinan-side.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg');

    let product3 = new Product();
    product3.id = "3";
    product3.address.line1 = "Nashik Road";
    product3.address.city = "Nashik ";
    product3.address.state = "Maharshtra";
    product3.title = "Fun stories about car and kids";
    product3.category = "cars";
    product3.description = "Just A Photo";
    product3.postDate = new Date();
    product3.heroImageUrl = "http://i.imgur.com/REM4kQUg.jpg";
    product3.price.amount = 730000;
    product3.price.isNegotiable = true;
    product3.imageUrls.push('http://i.imgur.com/REM4kQUg.jpg');

    let product4 = new Product();
    product4.id = "4";
    product4.address.line1 = "Kothrud Paschima Nagri";
    product4.address.city = "Pune";
    product4.address.state = "Maharshtra";
    product4.title = "Hyundai I20 i20 Asta 1.2, 2014, Petrol";
    product4.category = "cars";
    product4.description = "Maruti Suzuki India Limited, formerly known as Maruti Udyog Limited, is an automobile manufacturer in India. It is a 56.21% owned subsidiary of the Japanese car and motorcycle manufacturer Suzuki Motor Corporation. As of July 2018, it had a market share of 53% of the Indian passenger car market.";
    product4.postDate = new Date();
    product4.heroImageUrl = "https://i.ytimg.com/vi/dsWxMoh3_50/maxresdefault.jpg";
    product4.price.amount = 6800000;
    product4.price.isNegotiable = true;
    product4.imageUrls.push('https://i.ytimg.com/vi/dsWxMoh3_50/maxresdefault.jpg');

    let product5 = new Product();
    product5.id = "5";
    product5.address.line1 = "Baner";
    product5.address.city = "Pune";
    product5.address.state = "Maharshtra";
    product5.title = "Maruti Suzuki Wagon R LXI, 2016, CNG & Hybrids";
    product5.category = "cars";
    product5.description = "Most Beautiful Car in The World";
    product5.postDate = new Date();
    product5.heroImageUrl = "https://image.shutterstock.com/image-photo/big-small-ripe-red-strawberry-260nw-642144988.jpg";
    product5.price.amount = 460000;
    product5.price.isNegotiable = true;
    product5.imageUrls.push('https://image.shutterstock.com/image-photo/big-small-ripe-red-strawberry-260nw-642144988.jpg');

    let product6 = new Product();
    product6.id = "6";
    product6.address.line1 = "Dombivali";
    product6.address.city = "Mumbai";
    product6.address.state = "Maharashtra";
    product6.title = "Volkswagen Vento Highline Diesel AT, 2016, Diesel";
    product6.category = "cars";
    product6.description = "New Car";
    product6.postDate = new Date();
    product6.heroImageUrl = "https://cdn.vox-cdn.com/thumbor/qW3lRejqR7xJAG_FTdRyxjfbalA=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/65408496/tesla_model_3_0638.0.jpg";
    product6.price.amount = 8600000;
    product6.price.isNegotiable = true;
    product6.imageUrls.push('https://cdn.vox-cdn.com/thumbor/qW3lRejqR7xJAG_FTdRyxjfbalA=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/65408496/tesla_model_3_0638.0.jpg');

    let product7 = new Product();
    product7.id = "7";
    product7.address.line1 = "Satara";
    product7.address.city = "USA";
    product7.address.state = "Dubai";
    product7.title = "Mercedes-Benz 2018 AMG GT C Roadster Convertible";
    product7.category = "cars";
    product7.description = "lorem ipsum";
    product7.postDate = new Date();
    product7.heroImageUrl = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product7.price.amount = 6800000;
    product7.price.isNegotiable = true;
    product7.imageUrls.push('https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');

    let product8 = new Product();
    product8.id = "8";
    product8.address.line1 = "Satara";
    product8.address.city = "USA";
    product8.address.state = "Dubai";
    product8.title = "Mercedes-Benz 2018 AMG GT C Roadster Convertible";
    product8.category = "cars";
    product8.description = "lorem ipsum";
    product8.postDate = new Date();
    product8.heroImageUrl = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product8.price.amount = 6800000;
    product8.price.isNegotiable = true;
    product8.imageUrls.push('https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');

    let product9 = new Product();
    product9.id = "9";
    product9.address.line1 = "Satara";
    product9.address.city = "USA";
    product9.address.state = "Dubai";
    product9.title = "Mercedes-Benz 2018 AMG GT C Roadster Convertible";
    product9.category = "cars";
    product9.description = "lorem ipsum";
    product9.postDate = new Date();
    product9.heroImageUrl = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product9.price.amount = 6800000;
    product9.price.isNegotiable = true;
    product9.imageUrls.push('https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');

    let product10 = new Product();
    product10.id = "10";
    product10.address.line1 = "Satara";
    product10.address.city = "USA";
    product10.address.state = "Dubai";
    product10.title = "Mercedes-Benz 2018 AMG GT C Roadster Convertible";
    product10.category = "cars";
    product10.description = "lorem ipsum";
    product10.postDate = new Date();
    product10.heroImageUrl = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product10.price.amount = 6800000;
    product10.price.isNegotiable = true;
    product10.imageUrls.push('https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');

    let product11 = new Product();
    product11.id = "11";
    product11.address.line1 = "Satara";
    product11.address.city = "USA";
    product11.address.state = "Dubai";
    product11.title = "Mercedes-Benz 2018 AMG GT C Roadster Convertible";
    product11.category = "cars";
    product11.description = "lorem ipsum";
    product11.postDate = new Date();
    product11.heroImageUrl = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product11.price.amount = 6800000;
    product11.price.isNegotiable = true;
    product11.imageUrls.push('https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');

    let product12 = new Product();
    product12.id = "12";
    product12.address.line1 = "Satara";
    product12.address.city = "USA";
    product12.address.state = "Dubai";
    product12.title = "Mercedes-Benz 2018 AMG GT C Roadster Convertible";
    product12.category = "cars";
    product12.description = "lorem ipsum";
    product12.postDate = new Date();
    product12.heroImageUrl = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product12.price.amount = 6800000;
    product12.price.isNegotiable = true;
    product12.imageUrls.push('https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');

    let product13 = new Product();
    product13.address.line1 = "Satara";
    product13.address.city = "USA";
    product13.address.state = "Dubai";
    product13.title = "Mercedes-Benz 2018 AMG GT C Roadster Convertible";
    product13.category = "cars";
    product13.description = "lorem ipsum";
    product13.postDate = new Date();
    product13.heroImageUrl = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product13.price.amount = 6800000;
    product13.price.isNegotiable = true;
    product13.imageUrls.push('https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');

    let itemList: Product[] = [
      product1, product2, product3, product4, product5, product6, product7,
      product8, product9, product10, product11, product12, product13
    ];
    return itemList;
  }

  getDummyProductDetails(productId): ProductDetails {
    let productObj = new Product();
    productObj = this.searchProduct(productId);
    let sellerObj = new Seller();
    sellerObj.id = "1";
    sellerObj.name = "Nikita Narkhede";

    if (!productObj) {
      return null;
    }

    let productDetailsObj = new ProductDetails();
    productDetailsObj.seller = sellerObj;
    productDetailsObj.product = productObj;

    return productDetailsObj;
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
    getProductDetailsResponse.productDetails = this.getDummyProductDetails(productId);
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
}
