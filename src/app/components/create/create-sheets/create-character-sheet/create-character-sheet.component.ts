import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { MatchService } from '../../../../services/match.service';
import { CharacterService } from '../../../../services/character.service';
import { LocationService } from '../../../../services/location.service';
import { FamilyService } from '../../../../services/family.service';

import { Character } from '../../../../services/data/Character';
import { Location } from '../../../../services/data/Location';

import { CharacterSelectorComponent } from "../../../selectors/character-selector/character-selector.component";
import { LocationSelectorComponent } from "../../../selectors/location-selector/location-selector.component";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faPlusCircle, faMinusCircle, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { VolumeSelectorComponent } from "../../../selectors/volume-selector/volume-selector.component";

@Component({
  selector: 'app-create-character-sheet',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    CharacterSelectorComponent,
    LocationSelectorComponent,
    VolumeSelectorComponent
],
  templateUrl: './create-character-sheet.component.html',
  styleUrl: './create-character-sheet.component.scss'
})

export class CreateCharacterSheetComponent implements OnInit
{
    public name : string = "Placeholder";
    public gender : string = "";
    public birthPlace : { id: number, name: string } = { id: 1, name: 'Émeraude' };

    public families : { parent1Id : number, parent2Id : number, isBiological: boolean }[] = [
        {
            parent1Id: 0,
            parent2Id: 0,
            isBiological: true
        }
    ];

    public appearanceVolumeId : number = 0;
    public deathVolumeId : number = 0;

    public infoCards = [
        {
            name: "Statut",
            toggled: false
        },

        {
            name: "Tomes",
            toggled: false
        },

        {
            name: "Chevalier",
            toggled: false
        }
    ];

    public FaGoBackIcon = faChevronLeft;
    public FaPlusIcon = faPlusCircle;
    public FaMinusIcon = faMinusCircle;
    public FaBiologicalIcon = faLeaf;

    public constructor(
        private router : Router,
        private matchService : MatchService, 
        private characterService : CharacterService, private locationService : LocationService,
        private familyService : FamilyService,
    ) { }

    public ngOnInit() : void
    {
        
    }

    public match(character : Character | { "name": string, "birthPlace" : string }) : string
    {
        return this.matchService.matchNameLocation(character.name, character.birthPlace);
    }

    public createCharacter() : void
    {
        this.characterService.CreateCharacter({
            name: this.name,
            gender: this.gender,
            birthPlaceId: this.birthPlace.id,
            appearanceVolumeId:  this.appearanceVolumeId,
            deathVolumeId: this.deathVolumeId,
        }).subscribe(newCharacterID => {
            
            this.familyService.CreateFamily(this.families.map(family => {
                return {
                    childId: newCharacterID,
                    parent1Id: family.parent1Id,
                    parent2Id: family.parent2Id,
                    isBiological: family.isBiological
                };
            })).subscribe(response => {
                alert(this.match({ name: this.name, birthPlace: this.birthPlace.name }) + " was created!");
                this.router.navigate(["browse"]);
            });
        });
    }

    public toggle(infoCard : { name: string, toggled: boolean }) : void
    {
        infoCard.toggled = !infoCard.toggled;
    }

    public addFamily() : void
    {
        let newFamily = {
            parent1Id: 0,
            parent2Id: 0,
            isBiological: !this.families.some(family => family.isBiological)
        };

        this.families.push(newFamily);
    }

    public removeFamily() : void
    {
        this.families.pop();

        if(this.families.every(family => !family.isBiological))
            this.families[this.families.length - 1].isBiological = true;
    }

    public markAsBiological(family : { isBiological : boolean }) : void
    {
        this.families.forEach(family => family.isBiological = false);

        family.isBiological = true;
    }
}
