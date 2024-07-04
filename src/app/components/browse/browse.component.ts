import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterCardComponent } from './browse-cards/character-card/character-card.component';

import { CharacterService } from '../../services/character.service';

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

    public constructor(private characterService : CharacterService) { }

    public ngOnInit(): void 
    {
        this.activeTab = "characters";

        this.refresh();
    }

    public changeTab(nextTab : string) : void
    {
        this.activeTab = nextTab;
    }

    public refresh() : void
    {
        this.characterService.GetCharacters().subscribe(response => {
            this.characters = JSON.parse(JSON.stringify(response))
            .map((character: { id: number; name: string; birthPlace: string; homePlace: string; }) => {
                let newCharacter = new Character();
                
                newCharacter.id = character.id;
                newCharacter.name = character.name;
                newCharacter.birthPlace = character.birthPlace;
                newCharacter.homePlace = character.homePlace;

                return newCharacter;
            })
            
            this.characters.sort((characterA, characterB) => {
                
                let a = Test.positionInAlphabet(characterA.name[0]);
                let b = Test.positionInAlphabet(characterB.name[0]);
                
                if(a > b)
                    return 1;

                if(a < b)
                    return -1;

                return 0;
            });
        });
    }

    public getLength()
    {
        return this.characters.length;
    }
}

class Character
{
    id : number = -1;
    name : string = "";
    birthPlace : string = "";
    homePlace : string = "";

    toString() : string
    {
        return `${this.id}, ${this.name}, ${this.birthPlace}, ${this.homePlace}`;
    }
}

class Test
{
    private static alphabet = "aàâäbcdeéèêëfghiìîïjklmnoòôöpqrstuùûüvwxyÿz";
    public static positionInAlphabet(char : string)
    {
        return this.alphabet.indexOf(char.toLowerCase());
    }
}
