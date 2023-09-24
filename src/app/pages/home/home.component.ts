import { Component } from '@angular/core';
import { data } from 'src/app/data/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  dataArray: any = []
  firstItem: any = {}

  constructor(){
    data.forEach(item =>{ if(item.id!='1')this.dataArray.push(item) })
    this.firstItem = data[0]
  }
}
