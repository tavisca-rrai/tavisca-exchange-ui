import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

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
    let url = this.serverUrl + environment.imageApiSettings.uploadImagePath + id;
    console.log(url);
    return this.http.delete(url);
  }

}

interface ImgResponse {
  imageUrl:string;
}
