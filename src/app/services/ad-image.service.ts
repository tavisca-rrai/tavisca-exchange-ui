import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ProductImages } from '../models/ProductImages';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }
  serverUrl= environment.imageApiSettings.BaseUrl;   //"https://localhost:44357/"; //the root url of the server

  uploadImage(file): Observable<HttpEvent<ImgResponse>>{
    let input = new FormData();
    input.append("file", file);

    const req = new HttpRequest('POST', this.serverUrl+ environment.imageApiSettings.uploadImagePath, input, {
         reportProgress: true,
    });
    return this.http.request<ImgResponse>(req);

  }

  deleteImage(id):Observable<object>
  {
    let deleteUrl = this.serverUrl + environment.imageApiSettings.uploadImagePath + id;
    console.log("Deleting: "+deleteUrl);
    return this.http.delete(deleteUrl);
  }

  storeImages(productImages:ProductImages):Observable<object>
  {
    let storeUrl = this.serverUrl+environment.imageApiSettings.storeImagePath;
    console.log("Moving: "+productImages);
    return this.http.post(storeUrl,productImages);
  }

}

interface ImgResponse {
  imageUrl:string;
}
