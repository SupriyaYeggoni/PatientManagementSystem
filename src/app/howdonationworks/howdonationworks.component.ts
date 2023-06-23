
import { Component ,HostBinding,HostListener} from '@angular/core';

@Component({
  selector: 'app-howdonationworks',
  templateUrl: './howdonationworks.component.html',
  styleUrls: ['./howdonationworks.component.css']
})
export class HowdonationworksComponent {
  @HostBinding("style.color") textcolor:string |undefined;
  ngOnInit():void{
    this.textcolor="purple";
  }
  @HostListener('click') onClick()
  {
   this.textcolor= "red";
  }

  @HostListener('mouseover') onMouseOver()
  {
   this.textcolor= "blue";
  }

  @HostListener('mouseout') onMOut()
  {
   this.textcolor= "green";
  }
}
