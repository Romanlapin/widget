import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-weather',
  templateUrl: './main-weather.component.html',
  styleUrls: ['./main-weather.component.css']
})
export class MainWeatherComponent implements OnInit {
  WeatherData: any;
  CompassPoint: any;
  constructor() { }

  ngOnInit(): void {
    this.getWeatherData();
  }

  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Kiev&units=metric&appid=0fc8c91ace72273ebb9d8fbc781f6c8c')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})
  }

  setWeatherData(data){
    this.WeatherData = data;

    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    this.WeatherData.isDay =  (this.WeatherData.dt > this.WeatherData.sys.sunrise);
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like).toFixed(0);
    this.WeatherData.weather_icon_temp = (this.WeatherData.weather[0].main);
    console.log(this.WeatherData)

    if (this.WeatherData.wind.deg >= 315) {
      this.CompassPoint = "NW"

    } else if (this.WeatherData.wind.deg >= 270) {
      this.CompassPoint = "W"

    } else if (this.WeatherData.wind.deg >= 225) {
      this.CompassPoint = "SW"

    } else if (this.WeatherData.wind.deg >= 180) {
      this.CompassPoint = "S"

    } else if (this.WeatherData.wind.deg >= 135) {
      this.CompassPoint = "SE"

    } else if (this.WeatherData.wind.deg >= 90) {
      this.CompassPoint = "E"

    } else if (this.WeatherData.wind.deg >= 45) {
      this.CompassPoint = "NE"
      
    } else{
      this.CompassPoint = "N"
    }
  }
}
