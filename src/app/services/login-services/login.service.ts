import { LoginMockService } from "./login.mock.service";
import { ILoginService } from "./i-login-service";
import { UserSignInDetails } from "../../login-module/models/user-signin-details";
import { SignInResponse } from "../../login-module/models/sign-in-response";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class LoginService implements ILoginService {
  loginMockService: LoginMockService = null;
  constructor(private http: HttpClient) {
    if (environment.isMockingEnabled) {
      this.loginMockService = new LoginMockService();
    }
  }

  verifyUserCredentials(
    userDetails: UserSignInDetails
  ): Observable<SignInResponse> {
    if (environment.isMockingEnabled) {
      return this.loginMockService.verifyUserCredentials(userDetails);
    } else {
      var url = this.getUrl(environment.loginSetting.signInPath);
      return this.http.post<any>(url, JSON.stringify(userDetails), httpOptions);
    }
  }

  private getUrl(path: string): string {
    return environment.loginSetting.BaseUrl +
      environment.version +
      environment.applicationName +
      path;
  }
}
