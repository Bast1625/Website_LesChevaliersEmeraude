import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterCardComponent } from './browse-cards/character-card/character-card.component';

import { CharacterService } from '../../services/character.service';
import { Character } from '../../services/data/Character';
import { BrowseService } from '../../services/browse.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [
    CommonModule,
    CharacterCardComponent
  ],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})

export class BrowseComponent implements OnInit
{
    public activeTab : string = "";
    public characters : Character[] = [];

    public constructor(private characterService : CharacterService, private browseService : BrowseService) { }

    public ngOnInit(): void 
    {
        this.activeTab = "characters";

        this.characterService.GetCharacters().subscribe(response => { 
            this.characters = response.sort((a, b) => a.name > b.name ? 1 : -1); 
        });
    }

    public changeTab(nextTab : string) : void
    {
        this.activeTab = nextTab;
    }

    public getLength()
    {
        return this.characters.length;
    }

    public onCharacterSheet() : void
    {
        this.browseService.set(this.characters);
    }   
}
