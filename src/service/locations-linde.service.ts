import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocationsLinde } from 'src/interfaces/LindeLocation.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationsLindeService {


  Base = environment.urlBase

  constructor(
    private http: HttpClient
  ) { }


  getLocations (){


    const url= `${this.Base}/locations`

    return this.http.get<LocationsLinde>(url)


  }


}
