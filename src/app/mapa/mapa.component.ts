import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from 'src/interfaces/LindeLocation.interface';
import { LocationsLindeService } from 'src/service/locations-linde.service';
import { MapServiceService } from 'src/service/map-service.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit, AfterViewInit {

  @ViewChild("map", { static: true }) mapelemet!: any;

  map:any
  locations: any[]= []
  distros: any[]= []
  popularidad: number = 75;


  graficas: any[] = [
    {
      grafica: {
        labels: [ 'Personas Fisicas', 'Empresas Grandes', 'Empresas pequeñas' ],
        datasets: [ {
          data: [ 400, 400, 200 ]
        } ]
      },
      title: 'Clientes'
    },
    {
      grafica: {
        labels: [ 'Salud', 'Metal', 'Soldadura' ],
        datasets: [ {
          data: [ 240, 430, 320 ]
        } ]
      },
      title: 'Lo más vendido'
    },
  ]


  constructor(
    private locationLinde: LocationsLindeService,
    private mapsService: MapServiceService,
  ) { }
  
  ngOnInit(): void {


      const mapProperties = {
        center: new google.maps.LatLng(25.685873, -100.315888),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(
        this.mapelemet.nativeElement,
        mapProperties
      );


      this.LocationLindeInit()
      

  }

  
  ngAfterViewInit(): void {
      this.addMapaCalor();
      this.getDistribuidores();
    
  }


      addMapaCalor() {

        this.mapsService.getCoords()
        .subscribe( (resp: any) => {
          
          const customers = resp['customers'];

          let heatmapData: any = [];
        
          customers.forEach( (c: any) => {
            heatmapData.push(new google.maps.LatLng( c.lat, c.lng),)
          });

          const heatmap = new google.maps.visualization.HeatmapLayer({
            data: heatmapData
          });

        
          heatmap.setMap(this.map);
          
        })

      }


    getDistribuidores() {

      this.mapsService.distribuidores()
        .subscribe( (resp: any) => {

          for(let i = 0; i < resp['distros'].length; i ++) {

            let marker = new google.maps.Marker({
              position: {lat: +resp['distros'][i].lat, lng: +resp['distros'][i].lng},
              icon: resp['distros'][i].icon,
              map: this.map,
              title: resp['distros'][i].name
            });

            marker.addListener('click', () => {


            });

            this.distros.push(marker);
          }

        }) 
    }



    LocationLindeInit(){

      this.locationLinde.getLocations().subscribe(
        (resp: any)=>{

          for(let i = 0; i < resp.locations.length; i ++) {

              let marker = new google.maps.Marker({
                position: {lat: +resp.locations[i].lat, lng: +resp.locations[i].lng},
                icon: resp.locations[i].icon,
                map: this.map,
                title: resp.locations[i].name
              });
              marker.addListener('click', () => {

                switch( i ) {

                  case 0: 
                    this.popularidad = 75;
                    this.graficas = [
                      {
                        grafica: {
                          labels: [ 'Personas Fisicas', 'Empresas Grandes', 'Empresas pequeñas' ],
                          datasets: [ {
                            data: [ 400, 400, 200 ]
                          } ]
                        },
                        title: 'Clientes'
                      },
                      {
                        grafica: {
                          labels: [ 'Salud', 'Metal', 'Soldadura' ],
                          datasets: [ {
                            data: [ 240, 430, 320 ]
                          } ]
                        },
                        title: 'Lo más vendido'
                      },
                    ]
                  break;

                  case 1: 
                  this.popularidad = 90;
                  this.graficas = [
                    
                    {
                      grafica: {
                        labels: [ 'Personas Fisicas', 'Empresas Grandes', 'Empresas pequeñas' ],
                        datasets: [ {
                          data: [ 600, 140, 260 ]
                        } ]
                      },
                      title: 'Clientes'
                    },
                    {
                      grafica: {
                        labels: [ 'Salud', 'Metal', 'Soldadura' ],
                        datasets: [ {
                          data: [ 540, 250, 210 ]
                        } ]
                      },
                      title: 'Lo más vendido'
                    },
                  ]
                break;


                case 2: 
                  this.popularidad = 88;
                  this.graficas = [
                    
                    {
                      grafica: {
                        labels: [ 'Personas Fisicas', 'Empresas Grandes', 'Empresas pequeñas' ],
                        datasets: [ {
                          data: [ 240, 360, 400 ]
                        } ]
                      },
                      title: 'Clientes'
                    },
                    {
                      grafica: {
                        labels: [ 'Salud', 'Metal', 'Soldadura' ],
                        datasets: [ {
                          data: [  253, 207, 540, ]
                        } ]
                      },
                      title: 'Lo más vendido'
                    },
                  ]
                break;

                case 3: 
                  this.popularidad = 81;
                  this.graficas = [
                    
                    {
                      grafica: {
                        labels: [ 'Personas Fisicas', 'Empresas Grandes', 'Empresas pequeñas' ],
                        datasets: [ {
                          data: [ 445, 255,  300 ]
                        } ]
                      },
                      title: 'Clientes'
                    },
                    {
                      grafica: {
                        labels: [ 'Salud', 'Metal', 'Soldadura' ],
                        datasets: [ {
                          data: [  207, 240, 553, ]
                        } ]
                      },
                      title: 'Lo más vendido'
                    },
                  ]
                break;


                case 4: 
                  this.popularidad = 89;
                  this.graficas = [
                    
                    {
                      grafica: {
                        labels: [ 'Personas Fisicas', 'Empresas Grandes', 'Empresas pequeñas' ],
                        datasets: [ {
                          data: [ 255,  300, 445 ]
                        } ]
                      },
                      title: 'Clientes'
                    },
                    {
                      grafica: {
                        labels: [ 'Salud', 'Metal', 'Soldadura' ],
                        datasets: [ {
                          data: [  553, 207, 240, ]
                        } ]
                      },
                      title: 'Lo más vendido'
                    },
                  ]
                break;


                case 5: 
                  this.popularidad = 72;
                  this.graficas = [
                    
                    {
                      grafica: {
                        labels: [ 'Personas Fisicas', 'Empresas Grandes', 'Empresas pequeñas' ],
                        datasets: [ {
                          data: [ 700, 255, 45 ]
                        } ]
                      },
                      title: 'Clientes'
                    },
                    {
                      grafica: {
                        labels: [ 'Salud', 'Metal', 'Soldadura' ],
                        datasets: [ {
                          data: [  557,  240, 203 ]
                        } ]
                      },
                      title: 'Lo más vendido'
                    },
                  ]
                break;


                case 6: 
                  this.popularidad = 97;
                  this.graficas = [
                    
                    {
                      grafica: {
                        labels: [ 'Personas Fisicas', 'Empresas Grandes', 'Empresas pequeñas' ],
                        datasets: [ {
                          data: [ 601, 254, 145 ]
                        } ]
                      },
                      title: 'Clientes'
                    },
                    {
                      grafica: {
                        labels: [ 'Salud', 'Metal', 'Soldadura' ],
                        datasets: [ {
                          data: [  254, 601 , 145 ]
                        } ]
                      },
                      title: 'Lo más vendido'
                    },
                  ]
                break;

                }

                

              });
              this.locations.push(marker);
          }


          for(let i = 0; i < resp.polygons.length; i ++) {
            new google.maps.Polygon({
              paths: resp.polygons[i].coords,
              strokeColor: resp.polygons[i].color,
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: resp.polygons[i].color,
              fillOpacity: 0.35
            }).setMap(this.map)
          }


        }
      )

    }


  }







