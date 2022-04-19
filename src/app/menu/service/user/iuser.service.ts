import { Observable } from "rxjs";
import { User } from "src/app/shared/model/user.model";

export interface IUserService {
    getUserFromJwt(): Observable<User>;
}