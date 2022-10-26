import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

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
        center: new google.maps.LatLng(25.685873, -100.315888),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(
        this.mapelemet.nativeElement,
        mapProperties
      );

      

  }

  
  ngAfterViewInit(): void {
      this.addToMap()
    
  }

  addToMap() {


    new google.maps.Marker(
      {
        position:  { lat: 25.698286, lng: -100.310347 },
        map: this.map,
        title: "Linde Gases & Más Cetrika",
        icon: "https://img.icons8.com/cotton/344/30/online-store.png"
        
      }
    )

    new google.maps.Marker(
      {
        position:  { lat: 25.689932, lng: -100.268548 },
        map: this.map,
        title: "Linde Gases & Más Churubusco",
        icon: "https://img.icons8.com/cotton/344/30/online-store.png"
        
      }
    )

    new google.maps.Marker(
      {
        position:  { lat: 25.675031, lng: -100.207202 },
        map: this.map,
        title: "Linde Gases & Más Guadalupe",
        icon: "https://img.icons8.com/cotton/344/30/online-store.png"
        
      }
    )

    new google.maps.Marker(
      {
        position:  { lat: 25.779887, lng: -100.292432 },
        map: this.map,
        title: "Linde Gases & Más Escobedo",
        icon: "https://img.icons8.com/cotton/344/30/online-store.png"
        
      }
    )
  
    const coordsOne= [

      { lat: 25.725619, lng: -100.331198 },
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
      { lat: 25.668710, lng: -100.299143 },
      { lat: 25.666699, lng: -100.304164 },
      { lat: 25.668594, lng: -100.309014 },
      { lat: 25.672191, lng: -100.313949 },
      { lat: 25.676136, lng: -100.314550 },
      { lat: 25.679927, lng: -100.318412 },
      { lat: 25.687275, lng: -100.327124 },
      { lat: 25.696568, lng: -100.328916 },

    ]


      const coordsTwo = [
        { lat: 25.688895, lng: -100.217216},
        { lat: 25.684100, lng: -100.221679},
        { lat: 25.681006, lng: -100.230263},
        { lat: 25.672961, lng: -100.231292},
        { lat: 25.663048, lng: -100.228223},
        { lat: 25.656375, lng: -100.221185},
        { lat: 25.648483, lng: -100.209340},
        { lat: 25.652971, lng: -100.196809},
        { lat: 25.658077, lng: -100.189942},
        { lat: 25.667361, lng: -100.188054},
        { lat: 25.677572, lng: -100.183591},
        { lat: 25.687009, lng: -100.195264},
        { lat: 25.690103, lng: -100.205392},
      ];



      const coordsThree = [
       { lat: 25.694316, lng: -100.293160},
       { lat: 25.678686, lng: -100.294799},
       { lat: 25.668101, lng: -100.270217},
       { lat: 25.669947, lng: -100.253693},
       { lat: 25.674994, lng: -100.241129},
       { lat: 25.674994, lng: -100.241129},
       { lat: 25.674994, lng: -100.241129},
       { lat: 25.698746, lng: -100.241539},
       { lat: 25.709205, lng: -100.248640},
       { lat: 25.712527, lng: -100.261068},
     
      ];


      const coorsFour = [
        { lat: 25.792529, lng: -100.334325 },
        { lat: 25.808007, lng: -100.315336 },
        { lat: 25.797611, lng: -100.248105 },
        { lat: 25.775661, lng: -100.243999 },
        { lat: 25.753938, lng: -100.269660 },
        { lat: 25.740655, lng: -100.302887 },
        { lat: 25.741599, lng: -100.324371 },
        { lat: 25.755522, lng: -100.320179 },
        { lat: 25.764488, lng: -100.323323 },
        { lat: 25.764488, lng: -100.323323 },
       ];


      const one  = new google.maps.Polygon({
        paths: coordsOne,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35
      })

      const two  = new google.maps.Polygon({
        paths: coordsTwo,
        strokeColor: "#0043ff",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0043ff",
        fillOpacity: 0.35
      })

      const three  = new google.maps.Polygon({
        paths: coordsThree,
        strokeColor: "#2db730",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#2db730",
        fillOpacity: 0.35
      })


      const four  = new google.maps.Polygon({
        paths: coorsFour,
        strokeColor: "#940de2",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#940de2",
        fillOpacity: 0.35
      })


      one.setMap(this.map)
      two.setMap(this.map)
      three.setMap(this.map)
      four.setMap(this.map)
  }


  }





