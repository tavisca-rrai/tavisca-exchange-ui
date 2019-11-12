import { Product } from './product';
import { Observable } from 'rxjs';

export interface IProductService {
  AddProduct(product: Product): Observable<Product>;
}
