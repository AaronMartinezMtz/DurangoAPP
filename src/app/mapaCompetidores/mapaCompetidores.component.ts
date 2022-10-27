import { NgFor } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { Competitor, LocationCompetidores } from 'src/interfaces/LocationCompetidores.interface';
import { LocationCompetidoresService } from 'src/service/location-competidores.service';


@Component({
  selector: 'app-mapa-competidores',
  templateUrl: './mapaCompetidores.component.html',
  styleUrls: ['./mapaCompetidores.component.css']
})

export class MapaCompetidoresComponent implements OnInit {

  @ViewChild("map", { static: true }) mapelemet!: any;

  competitors: Competitor[]= []

  map:any


  constructor(
    private locationCompetidores: LocationCompetidoresService
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

      this.LocationCompetidoresInit()

    }
  

    LocationCompetidoresInit (){

      this.locationCompetidores.getLocations().subscribe(
          resp=>{

            this.competitors =  resp.competitors
            
            console.log(this.competitors);
            

            this.competitors.forEach(element => {


              console.log(element);
              

              new google.maps.Marker(
                {
                  position:  { lat: +element.lat, lng: +element.lng },
                  map: this.map,
                  title: element.Name,
                  icon: element.icon
                  
                }
              )
      
              
            });

          }
      )

      }



  }



