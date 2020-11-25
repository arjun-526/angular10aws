import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Vacovid19Service {

  private BASE_URL = "https://disease.sh/v3/covid-19/countries";

  constructor(private http: HttpClient) {

  }

  
  public getAllCountries(): Observable<any> {
    return this.http.get<any>(this.BASE_URL);
  }


}
