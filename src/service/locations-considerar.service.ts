import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocationParks } from 'src/interfaces/LocationParks.interface';
import { LocationsSchools } from 'src/interfaces/LocationSchools.interface';
import { LocationMalls } from 'src/interfaces/LocationsMalls.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationsConsiderarService {

  Base = environment.urlBase

  constructor(
    private http:HttpClient
  ) { }

  getLocationsSchools (){


    const url= `${this.Base}/schools`

    return this.http.get<LocationsSchools>(url)


  }


  getLocationsParks (){


    const url= `${this.Base}/parks`

    return this.http.get<LocationParks>(url)


  }



  getLocationsMalls (){


    const url= `${this.Base}/malls`

    return this.http.get<LocationMalls>(url)


  }



}
