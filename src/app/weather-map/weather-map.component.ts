import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: "app-weather-map",
  templateUrl: "./weather-map.component.html",
  styleUrls: ["./weather-map.component.css"]
})
export class WeatherMapComponent implements OnInit {
  lat: number = 0.0236;
  lng: number = 37.9062;
  zoom: number = 6.5;
  city = "";
  getServ = [];

    constructor(
    public weatherService: WeatherService) {}

  ngOnInit(): any {
    this.getSeveral();
  }
  getSeveral() {
    this.weatherService.getSeveral(this.city).subscribe((data: any) => {
      this.getServ.push(data.list);
      this.getServ = data.list;
    });
  }
}