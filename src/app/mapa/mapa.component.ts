import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit, AfterViewInit {

  constructor() { }


  ngAfterViewInit(): void {
    
  //   this.map.data.addGeoJson({
  //     "type": "FeatureCollection",
  //     "features": [
  //         {
  //             "type": "Feature",
  //             "properties": {
  //                 "letter": "G",
  //                 "color": "blue",
  //                 "rank": "7",
  //                 "ascii": "71"
  //             },
  //             "geometry": {
  //                 "type": "Polygon",
  //                 "coordinates": [
  //                     [
  //                         [
  //                             123.61,
  //                             -22.14
  //                         ],
  //                         [
  //                             122.38,
  //                             -21.73
  //                         ],
  //                         [
  //                             120.38,
  //                             -24.73
  //                         ],
  //                         [
  //                             123.61,
  //                             -22.14
  //                         ]
  //                     ]
  //                 ]
  //             }
  //         }
  //     ]
  // })

    // this.map.data.setStyle({
    //   fillColor: "green",
    //   strokeWeight: 1
    // })



    const cordenadas = [
      { lat: 25.774, lng: -80.19 },
      { lat: 18.466, lng: -66.118 },
      { lat: 32.321, lng: -64.757 },
      { lat: 25.774, lng: -80.19 },
    ];


    const triangulo  = new google.maps.Polygon({
      paths: cordenadas,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35
    })




  }

  ngOnInit(): void {

  }

  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;



  zoom= 15
  center= { lat: 25.6723018, lng: -100.3691425 }
  display?: google.maps.LatLngLiteral;



  markerts = [

    
    {
      
      name: "linde 22",
      color: 'green',
      lat: 25.698480 ,
      lng: -100.310162,
      tag: "Hola1",


    }
   

  ]




  }





