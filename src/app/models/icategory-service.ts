import { GetCategoryResponse } from './get-category-response';
import { Observable } from 'rxjs';

export interface ICategoryService {
    getCategories(): Observable<GetCategoryResponse>;
}
