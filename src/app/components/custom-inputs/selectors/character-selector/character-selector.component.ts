import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

import { CharacterService } from '../../../../services/character.service';
import { MatchService } from '../../../../services/match.service';

import { Character } from '../../../../services/data/Character';

import { CustomSelectorComponent } from '../custom-selector/custom-selector.component';

@Component({
  selector: 'character-selector',
  standalone: true,
  imports: [
      CommonModule,
      FormsModule
  ],
  templateUrl: '../custom-selector/custom-selector.component.html',
  styleUrl: '../custom-selector/custom-selector.component.scss',
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CharacterSelectorComponent),
        multi: true
    }
  ]
})

export class CharacterSelectorComponent extends CustomSelectorComponent
{
    public override defaultValue: { value: any; textContent: string; } = { value: 0, textContent: "Inconnu"};
    
    private characters : Character[] = [];
    
    public constructor(
        private characterService : CharacterService,
        private matchService : MatchService) { super(); }

    public override ngOnInit() : void 
    {
        this.data = this.characterService.characters.map(character => {
            return {
                value: character.id,
                textContent: this.matchService.match(character.name, character.birthPlace)
            };
        });
        // this.characterService.GetCharacters().subscribe(response => {
        //     this.characters = response;

        //     this.data = this.characters
        //     .map(character => { 
        //         return { 
        //             value: character.id, 
        //             textContent: this.matchService.match(character.name, character.birthPlace)! 
        //         } 
        //     });
        // });
    }

    
}
