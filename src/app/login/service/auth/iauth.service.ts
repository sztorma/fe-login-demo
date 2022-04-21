import { Observable } from "rxjs";
import { Authentication } from "src/app/shared/model/authentication.model";

export interface IAuthService {
    authenticate(username: string, password: string): Observable<Authentication>;

    captchaAuthenticate(captchaToken: string): Observable<Authentication>;
}