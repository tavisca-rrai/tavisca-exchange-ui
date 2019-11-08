import { User } from './user';
import { Observable } from 'rxjs';

export interface IUserService {
    GetUserProfile(id: string): Observable<User>;
}