import { BaseResponse } from "./base-response";

export class SignInResponse extends BaseResponse {
  accessToken: string;
  refreshToken: string;
  userId: string;

  constructor(accessToken, refreshToken, userid) {
    super();
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.userId = userid;
  }
}
