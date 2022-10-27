import { Component, OnInit, ViewChild } from '@angular/core';
import { SocketService } from 'src/service/socket.service';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.css']
})
export class SugerenciasComponent implements OnInit {
  constructor(private socketService: SocketService ) {
  }
  
  @ViewChild("map", { static: true }) mapelemet!: any;

  map:any


  lat_long: any[] = [
    {
      title: '1',
      coords: { lat: 25.698286, lng: -100.310347 }
    },
    {
      title: '2',
      coords: { lat: 25.689932, lng: -100.268548 }
    },
    {
      title: '3',
      coords: { lat: 25.779887, lng: -100.292432 }
    },
    {
      title: '4',
      coords: { lat: 25.675031, lng: -100.207202 }
    },
  ]


  ngOnInit(): void {

      this.socketService.socket?.on('message', (payload:any) => {
        console.log(payload)
      })

      
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
    
    this.addToMap();
     
  }

  addToMap() {


    var markers= [];
    for(var i = 0; i < this.lat_long.length; i ++) {

      console.log(this.lat_long[i].coords)
        var marker = new google.maps.Marker({
            position: this.lat_long[i].coords,
            icon: 'https://img.icons8.com/cotton/344/30/online-store.png',
            map: this.map,
            title: this.lat_long[i].title
        });
        marker.addListener('click', function() {
            console.log(marker)
        });
        markers.push(marker);
    }



    }

  }