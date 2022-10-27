import { Component, OnInit, ViewChild } from '@angular/core';
import { MapServiceService } from 'src/service/map-service.service';
import { SocketService } from 'src/service/socket.service';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.css']
})
export class SugerenciasComponent implements OnInit {
  constructor(private socketService: SocketService,
              private mapService: MapServiceService ) {
  }
  
  @ViewChild("map", { static: true }) mapelemet!: any;

  map:any


  resp: any | null;
  myPoint: any[]  = [];

  array: any[] = [];
  sugerencias: any[]  = [];

  itemSelected: any = {}

  showModal: boolean = false;


  arrayResp: any [] = []

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

      this.map.addListener("click", (mapsMouseEvent: any) => {
      
        this.setMapOnAll(null);

        this.mapService.test(mapsMouseEvent.latLng.toJSON())
          .subscribe( (resp: any) => {
            this.resp = resp;
            console.log(this.resp)
            console.log((resp['factibilidad'] * 100 ).toFixed(2) + '%')


                var marker = new google.maps.Marker({
                    position: mapsMouseEvent.latLng.toJSON(),
                    // icon: 'https://img.icons8.com/cotton/344/30/online-store.png',
                    map: this.map,
                    // title: this.lat_long[i].title
                });
                marker.addListener('click', function() {
                    console.log(marker)
                });
                this.myPoint!.push(marker);
            }

          )
      })

  }

  setMapOnAll(map: google.maps.Map | null ) {
    for (let i = 0; i < this.myPoint.length; i++) {
      this.myPoint[i].setMap(map);
    }
  }
  
  ngAfterViewInit(): void {
    
    this.addToMap();
     
  }

  addToMap() {


    this.mapService.sugerencias().subscribe(
      (resp: any)=>{

        this.arrayResp.push(resp['factible1'])
        this.arrayResp.push(resp['factible2'])
        this.arrayResp.push(resp['factible3'])
        
        console.log(this.arrayResp)
        this.array.push(resp['factible1'].location)
        this.array.push(resp['factible2'].location)
        this.array.push(resp['factible3'].location)

        for(let i = 0; i < this.array.length; i ++) {

            let marker = new google.maps.Marker({
              position: {lat: +this.array[i].lat, lng: +this.array[i].lng},
              icon: this.array[i].icon,
              map: this.map,
              title: this.array[i].name
            });

            new google.maps.Circle({
              strokeColor: i == 1 ? "#FF0000" : '#04ff00',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: i == 1 ? "#FF0000" : '#04ff00',
              fillOpacity: 0.35,
              map: this.map,
              center: {lat: +this.array[i].lat, lng: +this.array[i].lng},
              radius: 100 * 25,
            });

            marker.addListener('click', () => {
                this.itemSelected = this.arrayResp[i]
                this.resp = this.arrayResp[i]
                this.showModal = true;
                
            });

            this.sugerencias.push(marker);
        }


      }
    )
   

  }



  closeModal() {
    this.showModal = false;
  }



}