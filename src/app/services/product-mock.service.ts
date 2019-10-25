import { IproductService } from '../models/iproduct-service';
import { Product } from './../models/product';
import { ProductDetails } from './../models/product-details';
import { PagingInfo } from './../models/paging-info';
import { Observable, of } from 'rxjs';
import { GetProductDetailsResponse } from '../models/get-product-details-response';
import { GetProductsListResponse } from '../models/get-products-list-response';

export class ProductMockService implements IproductService {

  constructor() { }

  AddProduct(product: Product): Observable<Product> {
    product.id = "P123";
    product.status = "Active";

    product.postDate = "2019-09-01";
    product.expirationDate = "2019-09-01";
    product.purchaseDate = "2019-09-01";

    // set other details coming from web
    return of(product);
  }

  getDummyProductList(): Product[] {
    let product1 = new Product();
    product1.address.line1 = "Nagpur";
    product1.address.city = "Nagpur";
    product1.address.state = "Maharashtra";
    product1.title = "BMW 5 Series 530i Sedan, 2008, Petrol";
    product1.category = "cars";
    product1.description = "lorem ipsum";
    product1.dateOfPurchase = new Date();
    product1.heroImageUrl = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product1.price.amount = 3200000;
    product1.price.isNegotiable = false;
    product1.imageUrl.push('www.facebook.com');

    let product2 = new Product();
    product2.address.line1 = "Satara";
    product2.address.city = "USA";
    product2.address.state = "Dubai";
    product2.title = "Mercedes-Benz 2018 AMG GT C Roadster Convertible";
    product2.category = "cars";
    product2.description = "lorem ipsum";
    product2.dateOfPurchase = new Date();
    product2.heroImageUrl = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product2.price.amount = 6800000;
    product2.price.isNegotiable = true;
    product2.imageUrl.push('www.google.com');

    let product3 = new Product();
    product3.address.line1 = "Satara";
    product3.address.city = "USA";
    product3.address.state = "Dubai";
    product3.title = "Mercedes-Benz 2018 AMG GT C Roadster Convertible";
    product3.category = "cars";
    product3.description = "lorem ipsum";
    product3.dateOfPurchase = new Date();
    product3.heroImageUrl = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product3.price.amount = 6800000;
    product3.price.isNegotiable = true;
    product3.imageUrl.push('www.google.com');

    let product4 = new Product();
    product4.address.line1 = "Satara";
    product4.address.city = "USA";
    product4.address.state = "Dubai";
    product4.title = "Mercedes-Benz 2018 AMG GT C Roadster Convertible";
    product4.category = "cars";
    product4.description = "lorem ipsum";
    product4.dateOfPurchase = new Date();
    product4.heroImageUrl = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product4.price.amount = 6800000;
    product4.price.isNegotiable = true;
    product4.imageUrl.push('www.google.com');

    let product5 = new Product();
    product5.address.line1 = "Satara";
    product5.address.city = "USA";
    product5.address.state = "Dubai";
    product5.title = "Mercedes-Benz 2018 AMG GT C Roadster Convertible";
    product5.category = "cars";
    product5.description = "lorem ipsum";
    product5.dateOfPurchase = new Date();
    product5.heroImageUrl = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product5.price.amount = 6800000;
    product5.price.isNegotiable = true;
    product5.imageUrl.push('www.google.com');

    let product6 = new Product();
    product6.address.line1 = "Satara";
    product6.address.city = "USA";
    product6.address.state = "Dubai";
    product6.title = "Mercedes-Benz 2018 AMG GT C Roadster Convertible";
    product6.category = "cars";
    product6.description = "lorem ipsum";
    product6.dateOfPurchase = new Date();
    product6.heroImageUrl = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product6.price.amount = 6800000;
    product6.price.isNegotiable = true;
    product6.imageUrl.push('www.google.com');

    let product7 = new Product();
    product7.address.line1 = "Satara";
    product7.address.city = "USA";
    product7.address.state = "Dubai";
    product7.title = "Mercedes-Benz 2018 AMG GT C Roadster Convertible";
    product7.category = "cars";
    product7.description = "lorem ipsum";
    product7.dateOfPurchase = new Date();
    product7.heroImageUrl = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product7.price.amount = 6800000;
    product7.price.isNegotiable = true;
    product7.imageUrl.push('www.google.com');

    let product8 = new Product();
    product8.address.line1 = "Satara";
    product8.address.city = "USA";
    product8.address.state = "Dubai";
    product8.title = "Mercedes-Benz 2018 AMG GT C Roadster Convertible";
    product8.category = "cars";
    product8.description = "lorem ipsum";
    product8.dateOfPurchase = new Date();
    product8.heroImageUrl = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product8.price.amount = 6800000;
    product8.price.isNegotiable = true;
    product8.imageUrl.push('www.google.com');

    let product9 = new Product();
    product9.address.line1 = "Satara";
    product9.address.city = "USA";
    product9.address.state = "Dubai";
    product9.title = "Mercedes-Benz 2018 AMG GT C Roadster Convertible";
    product9.category = "cars";
    product9.description = "lorem ipsum";
    product9.dateOfPurchase = new Date();
    product9.heroImageUrl = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product9.price.amount = 6800000;
    product9.price.isNegotiable = true;
    product9.imageUrl.push('www.google.com');

    let product10 = new Product();
    product10.address.line1 = "Satara";
    product10.address.city = "USA";
    product10.address.state = "Dubai";
    product10.title = "Mercedes-Benz 2018 AMG GT C Roadster Convertible";
    product10.category = "cars";
    product10.description = "lorem ipsum";
    product10.dateOfPurchase = new Date();
    product10.heroImageUrl = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product10.price.amount = 6800000;
    product10.price.isNegotiable = true;
    product10.imageUrl.push('www.google.com');

    let product11 = new Product();
    product11.address.line1 = "Satara";
    product11.address.city = "USA";
    product11.address.state = "Dubai";
    product11.title = "Mercedes-Benz 2018 AMG GT C Roadster Convertible";
    product11.category = "cars";
    product11.description = "lorem ipsum";
    product11.dateOfPurchase = new Date();
    product11.heroImageUrl = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product11.price.amount = 6800000;
    product11.price.isNegotiable = true;
    product11.imageUrl.push('www.google.com');

    let product12 = new Product();
    product12.address.line1 = "Satara";
    product12.address.city = "USA";
    product12.address.state = "Dubai";
    product12.title = "Mercedes-Benz 2018 AMG GT C Roadster Convertible";
    product12.category = "cars";
    product12.description = "lorem ipsum";
    product12.dateOfPurchase = new Date();
    product12.heroImageUrl = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product12.price.amount = 6800000;
    product12.price.isNegotiable = true;
    product12.imageUrl.push('www.google.com');

    let product13 = new Product();
    product13.address.line1 = "Satara";
    product13.address.city = "USA";
    product13.address.state = "Dubai";
    product13.title = "Mercedes-Benz 2018 AMG GT C Roadster Convertible";
    product13.category = "cars";
    product13.description = "lorem ipsum";
    product13.dateOfPurchase = new Date();
    product13.heroImageUrl = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    product13.price.amount = 6800000;
    product13.price.isNegotiable = true;
    product13.imageUrl.push('www.google.com');


    let itemList: Product[] = [
      product1, product2, product3, product4, product5, product6, product7,
      product8, product9, product10, product11, product12, product13
    ];
    return itemList;
  }

  getDummyProductDetails(): ProductDetails {
    let productObj = new Product();
    productObj.address.line1 = "Nagpur";
    productObj.address.city = "Nagpur";
    productObj.address.state = "Maharashtra";
    productObj.title = "BMW 5 Series 530i Sedan, 2008, Petrol";
    productObj.category = "cars";
    productObj.description = "lorem ipsum";
    productObj.dateOfPurchase = new Date();
    productObj.heroImageUrl = "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    productObj.price.amount = 3200000;
    productObj.price.isNegotiable = false;
    productObj.imageUrl.push('www.facebook.com');

    let productObjPagingInfo = new PagingInfo();
    productObjPagingInfo.pageNumber = 2;
    productObjPagingInfo.pageSize = 10;
    productObjPagingInfo.totalPages = 18;

    let productDetailsObj = new ProductDetails();
    productDetailsObj.productDetails = productObj;
    productDetailsObj.pagingInfo = productObjPagingInfo;

    return productDetailsObj;

  }

  getProductDetails(
    productId: string
  ): Observable<GetProductDetailsResponse> {
    var getProductDetailsResponse = new GetProductDetailsResponse();
    getProductDetailsResponse.productDetails = this.getDummyProductDetails();
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
