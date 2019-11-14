import { Injectable } from '@angular/core';
import { ICategoryService } from 'src/app/models/icategory-service';
import { GetCategoryResponse } from 'src/app/models/get-category-response';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryMockService implements ICategoryService {

  constructor() { }

  getDummyCategoryList(): string[] {
    let listofcategory: string[] = ["vehicle", "furniture", "Assoseries", "Household", "Electronics", "Books"];
    return listofcategory;
  }

  getCategories(): Observable<GetCategoryResponse> {
    var getCategoryResponse = new GetCategoryResponse();
    getCategoryResponse.categories = this.getDummyCategoryList();
    return of(getCategoryResponse);
  }
}
