import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
//import { API_CONFIG } from '../config/api.config';
//import { Country } from '../model/country';
@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  constructor(private http: HttpClient) { }
/*
  findlAll(): Observable<Country[]> {
    return this.http.get<Country[]>(`${API_CONFIG.baseUrl}/country`);
  } */
}
