import { Injectable } from '@angular/core';
import { ICategoryService } from 'src/app/models/icategory-service';
import { GetCategoryResponse } from 'src/app/models/get-category-response';
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryMockService implements ICategoryService {

  constructor() { }

  getDummyCategoryList(): Category[] {
    let listofcategory : Category[];
    let cat1 = new Category();
    cat1.Name="Assoseries";
    cat1.Tags=["A1","A2","A3","A4"];


    let cat2 = new Category();
    cat2.Name="Household";
    cat2.Tags=["H1","H2","H3","H4"];


    let cat3 = new Category();
    cat3.Name="Electronics";
    cat3.Tags=["E1","E2","E3","E4"];

    listofcategory = [cat1,cat2,cat3];


    return listofcategory;
  }

  getCategories(): Observable<GetCategoryResponse> {
    var getCategoryResponse = new GetCategoryResponse();
    getCategoryResponse.categories = this.getDummyCategoryList();
    return of(getCategoryResponse);
  }
}
