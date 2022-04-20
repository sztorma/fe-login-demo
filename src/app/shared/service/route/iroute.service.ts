import { Observable } from "rxjs";
import { Route } from "src/app/shared/model/route.model";

export interface IRouteService {
    getRoutesForComponent(component: string): Observable<Route[]>;
}