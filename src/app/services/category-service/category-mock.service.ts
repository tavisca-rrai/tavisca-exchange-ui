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
    cat1.Name="Accessory";
    cat1.Tags=["A1","A2","A3","A4"];


    let cat2 = new Category();
    cat2.Name="Bike";
    cat2.Tags=["H1","H2","H3","H4"];

    let cat3 = new Category();
    cat3.Name="Book";
    cat3.Tags=["E1","E2","E3","E4"];

    let cat4 = new Category();
    cat4.Name="Car";
    cat4.Tags=["E1","E2","E3","E4"];

    let cat5 = new Category();
    cat5.Name="Electronics";
    cat5.Tags=["E1","E2","E3","E4"];

    let cat6 = new Category();
    cat6.Name="Fashion";
    cat6.Tags=["E1","E2","E3","E4"];

    let cat7 = new Category();
    cat7.Name="Furniture";
    cat7.Tags=["E1","E2","E3","E4"];

    let cat8 = new Category();
    cat8.Name="Home & Kitchen";
    cat8.Tags=["E1","E2","E3","E4"];

    let cat9 = new Category();
    cat9.Name="Mobile";
    cat9.Tags=["E1","E2","E3","E4"];

    let cat10 = new Category();
    cat10.Name="Property";
    cat10.Tags=["E1","E2","E3","E4"];

    let cat11 = new Category();
    cat11.Name="Toy";
    cat11.Tags=["E1","E2","E3","E4"];

    let cat12 = new Category();
    cat12.Name="Other";
    cat12.Tags=["E1","E2","E3","E4"];

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
