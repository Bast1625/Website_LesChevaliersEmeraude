import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location-card',
  standalone: true,
  imports: [],
  templateUrl: './location-card.component.html',
  styleUrl: './location-card.component.scss'
})
export class LocationCardComponent 
{
    @Input() public id : number = -1;
    @Input() public name : string = "";
    @Input() public continent : string = ""; 
    @Input() public gentilic : string = ""; 
    @Input() public religion : string | undefined = ""; 
}
