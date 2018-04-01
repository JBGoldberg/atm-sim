import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { environment } from '../environments/environment';

@Injectable()
export class AtmService {

  constructor(private http: HttpClient) {}

  withdraw($amount: number) {

    let params = new HttpParams().set('amount', ''+$amount);

    return this.http.get(`${environment.api}/api/atm/withdraw`, { params: params })
  }

}