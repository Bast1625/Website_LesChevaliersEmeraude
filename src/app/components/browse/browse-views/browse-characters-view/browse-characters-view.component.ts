import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterCardComponent } from '../../browse-cards/character-card/character-card.component';

import { CharacterService } from '../../../../services/character.service';
import { BrowseService } from '../../../../services/browse-services/browse.service';

import { Character } from '../../../../services/data/Character';

@Component({
  selector: 'app-browse-characters-view',
  standalone: true,
  imports: [
        CommonModule,
        CharacterCardComponent
    ],
  templateUrl: './browse-characters-view.component.html',
  styleUrl: './browse-characters-view.component.scss'
})

export class BrowseCharactersViewComponent implements OnInit
{
    public characters : Character[] = [];

    public constructor(private characterService : CharacterService, private browseService : BrowseService) { }

    public ngOnInit(): void 
    {
        this.characterService.GetCharacters().subscribe(response => {
            this.characters = response;

            this.characters = this.characters.sort((a, b) => a.name.localeCompare(b.name));

            
        })    
    }

    public onCharacterSheet() : void
    {
        this.browseService.set(this.characters);
    }  
}
