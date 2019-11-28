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
    cat1.name="Accessory";
    cat1.tags=["A1","A2","A3","A4"];


    let cat2 = new Category();
    cat2.name="Bike";
    cat2.tags=["H1","H2","H3","H4"];

    let cat3 = new Category();
    cat3.name="Book";
    cat3.tags=["E1","E2","E3","E4"];

    let cat4 = new Category();
    cat4.name="Car";
    cat4.tags=["E1","E2","E3","E4"];

    let cat5 = new Category();
    cat5.name="Electronics";
    cat5.tags=["E1","E2","E3","E4"];

    let cat6 = new Category();
    cat6.name="Fashion";
    cat6.tags=["E1","E2","E3","E4"];

    let cat7 = new Category();
    cat7.name="Furniture";
    cat7.tags=["E1","E2","E3","E4"];

    let cat8 = new Category();
    cat8.name="Home & Kitchen";
    cat8.tags=["E1","E2","E3","E4"];

    let cat9 = new Category();
    cat9.name="Mobile";
    cat9.tags=["E1","E2","E3","E4"];

    let cat10 = new Category();
    cat10.name="Property";
    cat10.tags=["E1","E2","E3","E4"];

    let cat11 = new Category();
    cat11.name="Toy";
    cat11.tags=["E1","E2","E3","E4"];

    let cat12 = new Category();
    cat12.name="Other";
    cat12.tags=["E1","E2","E3","E4"];

    listofcategory = [cat1,cat2,cat3,
                      cat4,cat5,cat6,
                      cat7,cat8,cat9,
                      cat10,cat11,cat12
                      ];


    return listofcategory;
  }

  getCategories(): Observable<GetCategoryResponse> {
    var getCategoryResponse = new GetCategoryResponse();
    getCategoryResponse.categories = this.getDummyCategoryList();
    return of(getCategoryResponse);
  }
}
