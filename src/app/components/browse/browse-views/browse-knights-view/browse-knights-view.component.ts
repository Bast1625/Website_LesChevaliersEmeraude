import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KnightCardComponent } from '../../browse-cards/knight-card/knight-card.component';

import { CharacterService } from '../../../../services/character.service';
import { BrowseService } from '../../../../services/browse-services/browse.service';

import { Knight } from '../../../../services/data/Knight';

@Component({
  selector: 'app-browse-knights-view',
  standalone: true,
  imports: [
        CommonModule, 
        KnightCardComponent
    ],
  templateUrl: './browse-knights-view.component.html',
  styleUrl: './browse-knights-view.component.scss'
})

export class BrowseKnightsViewComponent implements OnInit
{    
    public knights : Knight[] = [];

    public constructor(private characterService : CharacterService, private browseService : BrowseService) { }

    public ngOnInit(): void 
    {
        this.characterService.GetKnights().subscribe(response => {
            this.knights = response;
        });  
    }

    public onCharacterSheet() : void
    {
        this.browseService.set(this.knights);
    }  
}
