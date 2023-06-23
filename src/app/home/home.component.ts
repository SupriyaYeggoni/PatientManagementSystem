import { Component ,ViewEncapsulation,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from './../weather.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation : ViewEncapsulation.ShadowDom,
})
export class HomeComponent  implements OnInit{

weatherData:any = [];
  constructor(private user:WeatherService)
  {
    this.user.getdata().subscribe((data: any)=>{
      console.log(data);
      this.weatherData=data; 
    })
  }
  

  dateToday : String | undefined;
  name : String | undefined;

  ngOnInit():void {
    this.dateToday=new Date().toDateString();
    this.name = "Supriya";
  }
  
  }
  
 





