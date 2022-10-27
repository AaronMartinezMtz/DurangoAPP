import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapServiceService {


  constructor(
    private http: HttpClient
  ) { }

  getCoords() {
    return this.http.get(`http://10.19.40.59:3000/api/customers/500`);
  }


  test( coords: any ) {
    return this.http.post(`http://10.19.40.59:3000/api/simulation`, coords );
  }



  distribuidores() {
    return this.http.get(`http://10.19.40.59:3000/api/distros`)
  }


  sugerencias() {
    return this.http.get(`http://10.19.40.59:3000/api/simulation` );
  }

}
