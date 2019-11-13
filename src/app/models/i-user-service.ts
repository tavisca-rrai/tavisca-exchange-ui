import { GetUserProfileResponse } from './user/get-user-profile-response';
import { Observable } from 'rxjs';

export interface IUserService {
    getUserProfile(id: string): Observable<GetUserProfileResponse>;
}