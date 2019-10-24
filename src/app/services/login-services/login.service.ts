import { environment, loginsetting } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}

  verifyUserCredentials(userDetails): Observable<any> {
    var url =
      loginsetting.loginBaseUrl +
      environment.version +
      environment.applicationName +
      loginsetting.signInPath;
    return this.http.post<any>(url, JSON.stringify(userDetails), httpOptions);
  }
}
