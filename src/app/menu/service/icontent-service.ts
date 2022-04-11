import { Observable } from "rxjs";

export interface IContentService {
    getAdminContent(path: string): Observable<string>;
}