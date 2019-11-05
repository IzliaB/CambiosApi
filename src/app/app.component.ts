import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../services/weather.service';
import { weather } from '../models/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tarea4';
  ciudad: number = 0;
  temperatura = 0;
  humedad = 0;
  tempMax = 0;
  tempMin = 0;
  nubes = 0;

  constructor(private weatherServices : WeatherService){}
   
  ngOnInit(){}

  getDatos(){
       this.weatherServices.obtenerData(this.ciudad).subscribe(
          (res: weather) => {
           this.temperatura = res.main.temp - 273.5
           this.humedad = res.main.humidity
           this.tempMax = res.main.temp_max - 273.5
           this.tempMin = res.main.temp_min - 273.5
           this.nubes = res.clouds.all
          },

          (err) => {
            console.log(err);
          }
       );
  }
}

