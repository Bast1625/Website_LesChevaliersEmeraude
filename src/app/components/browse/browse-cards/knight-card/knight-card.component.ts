import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-knight-card',
  standalone: true,
  imports: [],
  templateUrl: './knight-card.component.html',
  styleUrl: './knight-card.component.scss'
})

export class KnightCardComponent 
{
    @Input() public id : number = -1;
    @Input() public name : string = "";
    @Input() public gender : string = "";
    @Input() public birthPlace : string = "";
    @Input() public status : string = ""; 
    @Input() public generation : number = -1;
    
    @Output() public onCharacterSheet : EventEmitter<void> = new EventEmitter<void>();

    public constructor(private router: Router, private route: ActivatedRoute) { }

    public goToCharacterSheet() : void
    {
        this.onCharacterSheet.emit();
        
        this.router.navigate([ this.id ], { relativeTo: this.route });
    }
}
