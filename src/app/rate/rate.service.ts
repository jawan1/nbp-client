import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Information} from './model/information';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  private apiUrl = 'http://localhost:8080/nbp/all';

  constructor(private http: HttpClient) { }

  getInformation(): Observable<Information> {
    return this.http.get<Information>(this.apiUrl);
  }
}
