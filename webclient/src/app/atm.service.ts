import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AtmService {

  constructor(private http: HttpClient) { }

  withdraw($amount: number) {

    let params = new HttpParams().set('amount', ''+$amount);

    return this.http.get(`/api/atm/withdraw`, { params: params })
  }

}


// findFiles(_filters?: any) {
//   return this.http.get(
//     environment.api + '/file',
//     {
//       search: _filters,
//       headers: this.authService.getHeaders()
//     }
//   ).map(
//     (response: Response) => {
//       const data = response.json();
//       return data;
//     })
//     .catch(
//     (error: Response) => {
//       return Observable.throw(error);
//     }
//     );
// }