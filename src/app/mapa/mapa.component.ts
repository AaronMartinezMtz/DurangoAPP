import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit, AfterViewInit {

  @ViewChild("map", { static: true }) mapelemet!: any;

  map:any


  constructor() { }
  
    ngOnInit(): void {

      
      const mapProperties = {
        center: new google.maps.LatLng(24.886, -70.268),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(
        this.mapelemet.nativeElement,
        mapProperties
      );


      new google.maps.Marker(
        {
          position:  { lat: 25.698286, lng: -100.310347 },
          map: this.map,
          label: "Linde Gases & Más Cetrika",
          icon: "https://img.icons8.com/cotton/344/30/online-store.png"
          
        }
      )

      new google.maps.Marker(
        {
          position:  { lat: 25.689932, lng: -100.268548 },
          map: this.map,
          label: "Linde Gases & Más Churubusco",
          icon: "https://img.icons8.com/cotton/344/30/online-store.png"
          
        }
      )

      // new google.maps.Marker(
      //   {
      //     position:  { lat: 25.675031, lng: -25.675031 },
      //     map: this.map,
      //     label: "Linde Gases & Más Guadalupe",
      //     icon: "https://img.icons8.com/cotton/344/30/online-store.png"
          
      //   }
      // )

      // new google.maps.Marker(
      //   {
      //     position:  { lat: 25.779887, lng: 100.292432 },
      //     map: this.map,
      //     label: "Linde Gases & Más Escobedo",
      //     icon: "https://img.icons8.com/cotton/344/30/online-store.png"
          
      //   }
      // )

    }

    ngAfterViewInit(): void {
      
      
    const cordenadas= [

      { lat: 25.723080, lng: -100.330331 },
      { lat: 25.726791, lng: -100.322744 },
      { lat: 25.729133, lng: -100.316928 },
      { lat: 25.731113, lng: -100.306378 },
      { lat: 25.731311, lng: -100.298026 },
      { lat: 25.722203, lng: -100.293336 },
      { lat: 25.711275, lng: -100.277562 },
      { lat: 25.692504, lng: -100.268578 },
      { lat: 25.686013, lng: -100.268578 },
      { lat: 25.675779, lng: -100.277696 },
      { lat: 25.667285, lng: -100.297310 },
      { lat: 25.723080, lng: -100.330331 }

    ]


      // const cordenadas = [
      //   { lat: 25.774, lng: -80.19 },
      //   { lat: 18.466, lng: -66.118 },
      //   { lat: 32.321, lng: -64.757 },
      //   { lat: 25.774, lng: -80.19 },
      // ];


      const triangulo  = new google.maps.Polygon({
        paths: cordenadas,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35
      })



      triangulo.setMap(this.map)
  }



  }





