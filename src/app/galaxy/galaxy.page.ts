import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';//import plug in

@Component({
  selector: 'app-galaxy',
  templateUrl: './galaxy.page.html',
  styleUrls: ['./galaxy.page.scss'],
})
export class GalaxyPage implements OnInit {
  //variables
  coordinates: any = "";
  lat: string = "";
  long: string = "";

  constructor() { }
  //method to get coordinance from plug in
  async getGPS() {
    this.coordinates = await Geolocation.getCurrentPosition();
    this.lat = this.coordinates.coords.latitude;//assign to strings
    this.long = this.coordinates.coords.longitude;
    }
    

  ngOnInit() {
  }

}
