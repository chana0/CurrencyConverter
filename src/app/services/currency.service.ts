import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  public currency0_:Array<JSON> | undefined;
  constructor(public http: HttpClient) { }
  url = "http://api.exchangeratesapi.io/v1/latest?access_key=050beeaad0ad5cda72460c6758d5a11e&format=1";
  GetCurrencyList(): Observable<JSON> {
    return this.http.get<JSON>(this.url);
  }
}
