import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, from } from 'rxjs';

import { GetCategoryResponse } from 'src/app/models/get-category-response';
import { ICategoryService } from 'src/app/models/icategory-service';
import { CategoryMockService } from './category-mock.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements ICategoryService {

  categoryMockService: CategoryMockService;


  constructor(private Http: HttpClient) {
    if (environment.isMockingEnabled) {
      this.categoryMockService = new CategoryMockService();
    }
  }

  getCategories(): Observable<GetCategoryResponse> {

    if (environment.isMockingEnabled) {
      return this.categoryMockService.getCategories();
    }
    else {
      return this.Http.get<GetCategoryResponse>(this.getUrl(environment.productSetting.getCategoriesPath), {
      });
    }
  }

  private getUrl(path: string): string {
    var apiUrl = environment.productSetting.BaseUrl +environment.version + environment.applicationName + path;
    return apiUrl;
  }
}
