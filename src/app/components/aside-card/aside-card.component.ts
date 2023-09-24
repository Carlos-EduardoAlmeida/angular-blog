import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aside-card',
  templateUrl: './aside-card.component.html',
  styleUrls: ['./aside-card.component.css']
})
export class AsideCardComponent {
  @Input() photoCover: string =''
  @Input() cardTitle: string =''

  @Input() id: string = ''
}
