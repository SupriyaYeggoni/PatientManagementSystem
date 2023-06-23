import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  weatherData:any = [];
  constructor(private user:WeatherService)
  {
    this.user.getdata().subscribe(data=>{
      console.log(data);
      this.weatherData=data; 
    })
  }
}
