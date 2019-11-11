import { Injectable } from '@angular/core';
import { ICategoryService } from 'src/app/models/icategory-service';
import { Category } from 'src/app/models/category';
import { GetCategoryResponse } from 'src/app/models/get-category-response';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryMockService implements ICategoryService {

  constructor() { }

  getDummyCategoryList(): Category[] {

    let category1 = new Category();
    category1.Id = 12344;
    category1.Name = "Books";

    let category2 = new Category();
    category2.Id = 12123;
    category2.Name = "Electronics";

    let category3 = new Category();
    category3.Id = 144;
    category3.Name = "Household";

    let category4 = new Category();
    category4.Id = 97112;
    category4.Name = "Assoseries";

    let category5 = new Category();
    category5.Id = 18181;
    category5.Name = "furniture";

    let category6 = new Category();
    category6.Id = 47282;
    category6.Name = "vehicle";

    let listofcategory: Category[] = [category1, category2, category3, category4, category5, category6];

    return listofcategory;
  }

  getCategories(): Observable<GetCategoryResponse> {
    var getCategoryResponse = new GetCategoryResponse();
    getCategoryResponse.categories = this.getDummyCategoryList();
    return of(getCategoryResponse);

  }
}
