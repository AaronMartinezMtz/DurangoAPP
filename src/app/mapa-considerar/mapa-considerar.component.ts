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

  schools: School[] = []
  parks: Park[] = []
  malls: Mall[] = []

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

            this.schools =  resp.schools
            
            console.log(this.schools);
            

            this.schools.forEach(element => {


              console.log(element);
              

              new google.maps.Marker(
                {
                  position:  { lat: +element.lat, lng: +element.lng },
                  map: this.map,
                  title: element.name,
                  icon: element.icon
                  
                }
              )
      
              
            });

          }
      )

      }


      LocationParksInit (){

        this.locationConsiderar.getLocationsParks().subscribe(
            resp=>{
  
              this.parks =  resp.parks
              
              console.log(this.parks);
              
  
              this.parks.forEach(element => {
  
  
                console.log(element);
                
  
                new google.maps.Marker(
                  {
                    position:  { lat: +element.lat, lng: +element.lng },
                    map: this.map,
                    title: element.name,
                    icon: element.icon
                    
                  }
                )
        
                
              });
  
            }
        )
  
        }



        LocationMallsInit (){

          this.locationConsiderar.getLocationsMalls().subscribe(
              resp=>{
    
                this.malls =  resp.malls
                
                console.log(this.malls);
                
    
                this.malls.forEach(element => {
    
    
                  console.log(element);
                  
    
                  new google.maps.Marker(
                    {
                      position:  { lat: +element.lat, lng: +element.lng },
                      map: this.map,
                      title: element.name,
                      icon: element.icon
                      
                    }
                  )
          
                  
                });
    
              }
          )
    
          }



  }