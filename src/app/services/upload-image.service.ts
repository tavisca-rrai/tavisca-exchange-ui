import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private http:HttpClient) { }
  serverUrl="https://localhost:44357/"; //the root url of the server

  uploadImage(file): Observable<HttpEvent<ImgResponse>>{
    let input = new FormData();
    input.append("file", file);

    const req = new HttpRequest('POST', this.serverUrl+'api/v1.0/OnlineRetailPortal/images', input, {
         reportProgress: true,
    });
    return this.http.request<ImgResponse>(req);

  }

}

interface ImgResponse {
  imageUrl:string;
}
