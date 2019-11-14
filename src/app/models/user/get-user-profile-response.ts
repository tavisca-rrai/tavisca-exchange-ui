import { BaseResponse } from "../base-response";
import { UserProfile } from "./user-profile";

export class GetUserProfileResponse extends BaseResponse {
    userProfile: UserProfile;
}
