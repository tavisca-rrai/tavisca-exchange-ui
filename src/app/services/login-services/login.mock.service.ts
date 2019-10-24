import { SignInResponse } from "src/app/login-module/models/sign-in-response";
import { UserSignInDetails } from "./../../login-module/models/user-signin-details";
import { ILoginService } from "./i-login-service";
import { Observable, of } from "rxjs";

export class LoginMockService implements ILoginService {
  constructor() { }
  verifyUserCredentials(
    userDetails: UserSignInDetails
  ): Observable<SignInResponse> {
    return of(new SignInResponse("78908asdasdasd", "dasdasdasd6587689", "1233"));
  }
}
