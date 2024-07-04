import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Input } from '@angular/core';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss'
})

export class CharacterCardComponent 
{
    @Input() public id : number = -1;
    @Input() public name : string = "";
    @Input() public race : string = "";

    @Input() public birthPlace : string = "";
    @Input() public job : string = "";
    @Input() public status : string = ""; 

}
