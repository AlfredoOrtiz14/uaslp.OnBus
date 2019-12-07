import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker, icon } from 'leaflet';


@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
})
export class GoogleMapsComponent implements OnInit {
  
  map: any;
  //@ViewChild('map') mapElement: ElementRef; 
   
  
  constructor() {
  }

  ngOnInit() {
    //this.iniMap();
    this.loadmap();
  }

  iniMap(){
    // let coords = new google.maps.LatLng(45,100);
    // let mapOptions: google.maps.MapOptions = {
    //   center: coords,
    //   zoom: 14,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // }

    //this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions)

  }

  loadmap() {
    let random;
    setTimeout(() => {
      random = Math.floor(Math.random() * (3 - 0 + 1) + 0);
      if(random == 0){
        this.map = new Map('map').setView([22.1340084, -100.985055], 14);
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom: 18}).addTo(this.map);
           
      let greenIcon = icon({
          iconUrl: '../../assets/img/pin-red.png',
          iconSize: [38, 38],
          popupAnchor: [-3, -76]
      });

      marker([22.1377769, -100.9891295], {icon: greenIcon}).addTo(this.map);
      marker([22.1425126, -101.0030618], {icon: greenIcon}).addTo(this.map);
      marker([22.133311, -100.974385], {icon: greenIcon}).addTo(this.map);

      }else if(random == 1){
        this.map = new Map('map').setView([22.1340084, -100.985055], 14);
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom: 18}).addTo(this.map);
           
      let greenIcon = icon({
          iconUrl: '../../assets/img/pin-green.png',
          iconSize: [38, 38],
          popupAnchor: [-3, -76]
      });

      marker([22.139050, -100.997100], {icon: greenIcon}).addTo(this.map);
      marker([22.1340084, -100.985055], {icon: greenIcon}).addTo(this.map);
      marker([22.130280, -100.976618], {icon: greenIcon}).addTo(this.map);

      }else if(random == 2){
        this.map = new Map('map').setView([22.1340084, -100.985055], 14);
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom: 18}).addTo(this.map);
           
      let greenIcon = icon({
          iconUrl: '../../assets/img/pin-pink.png',
          iconSize: [38, 38],
          popupAnchor: [-3, -76]
      });

      marker([22.130956, -100.985884], {icon: greenIcon}).addTo(this.map);
      marker([22.1387111,-100.9929029], {icon: greenIcon}).addTo(this.map);
      marker([22.149665, -100.999094], {icon: greenIcon}).addTo(this.map);

      }else if(random == 3){
        this.map = new Map('map').setView([22.1340084, -100.985055], 14);
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom: 18}).addTo(this.map);
           
      let greenIcon = icon({
          iconUrl: '../../assets/img/pin-black.png',
          iconSize: [38, 38],
          popupAnchor: [-3, -76]
      });

      marker([22.138200, -100.994177], {icon: greenIcon}).addTo(this.map);
      marker([22.144310, -100.992869], {icon: greenIcon}).addTo(this.map);
      marker([22.146846, -100.991248], {icon: greenIcon}).addTo(this.map);

      }
    }, 50);
  }

}
