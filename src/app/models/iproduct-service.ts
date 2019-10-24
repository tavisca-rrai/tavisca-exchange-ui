import { Product } from './product';
import { Observable } from 'rxjs';


export interface IproductService
{
  AddProduct(product: Product): Observable<Product>;
}
