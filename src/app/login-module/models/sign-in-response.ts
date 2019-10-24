import { BaseResponse } from "./base-response";

export class SignInResponse extends BaseResponse {
  accessToken: string;
  refreshToken: string;
  userid: string;
}
