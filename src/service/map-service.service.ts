import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapServiceService {

  graficas: any = [
    {
      grafica: {
        labels: [ 'Personas Fisicas', 'Empresas Grandes', 'Empresas pequeñas' ],
        datasets: [ {
          data: [ 600, 300, 100 ]
        } ]
      },
      title: 'Clientes'
    },
    {
      grafica: {
        labels: [ 'Personas Fisicas', 'Empresas Grandes', 'Empresas pequeñas' ],
        datasets: [ {
          data: [ 600, 300, 100 ]
        } ]
      },
      title: 'Clientes'
    },
  ]



  constructor(
    private http: HttpClient
  ) { }

  getCoords() {
    return this.http.get(`http://10.19.40.59:3000/api/customers/500`);
  }


}
