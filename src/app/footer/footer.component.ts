import { Component,HostBinding,HostListener } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
 @HostBinding("style.color") textcolor : string | undefined;
 ngOnInit():void{
  this.textcolor="puple";
 }
 @HostListener('mouseover') onMouseOver(){
  this.textcolor = "blue"
 }
}
