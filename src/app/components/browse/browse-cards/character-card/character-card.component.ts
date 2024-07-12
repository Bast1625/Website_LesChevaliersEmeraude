import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss'
})

export class CharacterCardComponent 
{
    @Input() public id : number = -1;
    @Input() public name : string = "";
    @Input() public gender : string = "";
    @Input() public birthPlace : string = "";
    @Input() public role : string = "";
    @Input() public status : string = ""; 

    @Output() public onCharacterSheet : EventEmitter<void> = new EventEmitter<void>();

    public constructor(private router: Router, private route: ActivatedRoute) { }

    public goToCharacterSheet() : void
    {
        this.onCharacterSheet.emit();
        
        this.router.navigate([ this.id ], { relativeTo: this.route });
    }
}
