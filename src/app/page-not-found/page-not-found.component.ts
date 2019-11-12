import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import {ErrorResponse} from '../models/error-response';
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  errordetails: ErrorResponse = new ErrorResponse();
  constructor(private productService: ProductService) { }

  ngOnInit() 
  {
      this.productService.getErrorObj()
      .subscribe(
        errorresponse =>
        {
          this.errordetails.code = errorresponse.code;
          this.errordetails.message = errorresponse.message;
          console.log(this.errordetails);
        },
        error => 
        {
          console.error('Oops:', error.message);
        },
      );
  }

}
