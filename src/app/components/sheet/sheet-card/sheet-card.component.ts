import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sheet-card',
  standalone: true,
  imports: [],
  templateUrl: './sheet-card.component.html',
  styleUrl: './sheet-card.component.scss'
})

export class SheetCardComponent 
{
    @Input() public title : string = "New Sheet-Card!";
}
