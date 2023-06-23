import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  getdata()
  {
    let url="https://api.openweathermap.org/data/2.5/weather?q=Kurnool&units=metric&appid=e68b67e6625da519fa7c81b4412c1445";
    return this.http.get(url);
  }
}
