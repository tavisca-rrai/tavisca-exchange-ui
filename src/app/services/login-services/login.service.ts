import { UserSignInDetails } from "../../login-module/models/user-signin-details";
import { ErrorResponse } from "./../../models/error-response";
import { SignInResponse } from "../../login-module/models/sign-in-response";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
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

  verifyUserCredentials(
    userDetails: UserSignInDetails
  ): Observable<SignInResponse> {
    var url =
      environment.loginsetting.BaseUrl +
      environment.version +
      environment.applicationName +
      environment.loginsetting.signInPath;
    return this.http.post<any>(url, JSON.stringify(userDetails), httpOptions);
  }
}
