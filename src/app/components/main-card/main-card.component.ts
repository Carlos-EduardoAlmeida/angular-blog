import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent{
  @Input() photoCover: string =''
  @Input() cardTitle: string =''
  @Input() cardDescription: string =''

  @Input() id: string = "0"
 
}
