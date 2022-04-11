import { Observable } from "rxjs";

export interface IContentService {
    getAdminContent(): Observable<string>;
}