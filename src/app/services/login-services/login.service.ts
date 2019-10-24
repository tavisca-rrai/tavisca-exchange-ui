import { environment } from "src/environments/environment";
import { loginEnviroment } from "../../../environments/loginSettings";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";

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
      loginEnviroment.loginBaseUrl +
      environment.version +
      environment.applicationName +
      loginEnviroment.signInPath;
    return this.http.post<any>(url, JSON.stringify(userDetails), httpOptions);
  }
}
