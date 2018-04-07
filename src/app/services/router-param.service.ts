import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

/**
 * use route parameters from outside router-outlet
 *
 * @class RouterParamService
 */
@Injectable()
export class RouterParamService {
  private _routerParam$: Subject<string> = new Subject<string>();

  setRouterParam(param: string) {
    this._routerParam$.next(param);
  }

  getRouterParam(): Observable<string> {
    return this._routerParam$.asObservable();
  }
}
