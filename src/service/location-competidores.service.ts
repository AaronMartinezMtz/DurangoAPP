import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocationCompetidores } from '../interfaces/LocationCompetidores.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationCompetidoresService {

  Base = environment.urlBase;

  constructor(
    private http: HttpClient

  ) { }


    getLocations (){


      const url= `${this.Base}/competitors`

      return this.http.get<LocationCompetidores>(url)


    }



}
