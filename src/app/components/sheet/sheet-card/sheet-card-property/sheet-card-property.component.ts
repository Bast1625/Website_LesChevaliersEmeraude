import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sheet-card-property',
  standalone: true,
  imports: [],
  templateUrl: './sheet-card-property.component.html',
  styleUrl: './sheet-card-property.component.scss'
})

export class SheetCardPropertyComponent 
{
    @Input() public propertyName : string = "New-Property!"
}
