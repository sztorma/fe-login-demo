import { Observable } from "rxjs";
import { Content } from "src/app/shared/model/content.model";

export interface IContentService {
    getContent(path: string): Observable<Content>;
}