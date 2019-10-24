import { SignInResponse } from "src/app/login-module/models/sign-in-response";
import { Observable } from "rxjs";
import { UserSignInDetails } from "src/app/login-module/models/user-signin-details";

export interface ILoginService {
  verifyUserCredentials(
    userDetails: UserSignInDetails
  ): Observable<SignInResponse>;
}
