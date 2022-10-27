import { Component, OnInit, ViewChild } from '@angular/core';
import { Park } from 'src/interfaces/LocationParks.interface';
import { School } from 'src/interfaces/LocationSchools.interface';
import { Mall } from 'src/interfaces/LocationsMalls.interface';
import { LocationsConsiderarService } from 'src/service/locations-considerar.service';

@Component({
  selector: 'app-mapa-considerar',
  templateUrl: './mapa-considerar.component.html',
  styleUrls: ['./mapa-considerar.component.css']
})
export class MapaConsiderarComponent implements OnInit {

  @ViewChild("map", { static: true }) mapelemet!: any;

  schools: any[] = []
  parks: any[] = []
  malls: any[] = []

  map:any


  constructor(
    private locationConsiderar: LocationsConsiderarService
  ) { }



  
  
    ngOnInit(): void {
      
      const mapProperties = {
        center: new google.maps.LatLng(25.684281, -100.316999),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(
        this.mapelemet.nativeElement,
        mapProperties
      );

      this.LocationSchoolInit()

      this.LocationParksInit()

      this.LocationMallsInit()

    }
  
    setMapOnAll(map: google.maps.Map | null, array: any[]) {
      for (let i = 0; i < array.length; i++) {
        array[i].setMap(map);
      }
    }


    LocationSchoolInit (){


      this.locationConsiderar.getLocationsSchools().subscribe(
          resp=>{

            for(var i = 0; i < resp.schools.length; i ++) {

                var marker = new google.maps.Marker({
                  position: {lat: +resp.schools[i].lat, lng: +resp.schools[i].lng},
                  icon: resp.schools[i].icon,
                  map: this.map,
                  title: resp.schools[i].name
                });
                marker.addListener('click', function() {
                    console.log(marker)
                });
                this.schools.push(marker);
            }


          }
      )

    }


      LocationParksInit (){


        this.locationConsiderar.getLocationsParks().subscribe(
          resp=>{

            for(var i = 0; i < resp.parks.length; i ++) {

                var marker = new google.maps.Marker({
                    position: {lat: +resp.parks[i].lat, lng: +resp.parks[i].lng},
                    icon: resp.parks[i].icon,
                    map: this.map,
                    title: resp.parks[i].name
                });
                marker.addListener('click', function() {
                    console.log(marker)
                });
                this.parks.push(marker);
            }


          }
      )
  
    }



    LocationMallsInit (){

          this.locationConsiderar.getLocationsMalls().subscribe(
            resp=>{
  
              for(var i = 0; i < resp.malls.length; i ++) {
  
                  var marker = new google.maps.Marker({
                      position: {lat: +resp.malls[i].lat, lng: +resp.malls[i].lng},
                      icon: resp.malls[i].icon,
                      map: this.map,
                      title: resp.malls[i].name
                  });
                  marker.addListener('click', function() {
                      console.log(marker)
                  });
                  this.malls.push(marker);
              }
  
  
            }
        )

    
    }



          change( event: any, id: number ) {

            switch( id ) {

              case 1:
                if ( event.target.checked ) {
                  this.LocationSchoolInit();
                } else {
                  this.setMapOnAll(null, this.schools)
                }
                return;

              case 2:
                if ( event.target.checked ) {
                  this.LocationParksInit();
                } else {
                  this.setMapOnAll(null, this.parks)
                }
                return;

              case 3:
                if ( event.target.checked ) {
                  this.LocationMallsInit();
                } else {
                  this.setMapOnAll(null, this.malls)
                }
                return;

              default:
                return ;

            }
          }

  }