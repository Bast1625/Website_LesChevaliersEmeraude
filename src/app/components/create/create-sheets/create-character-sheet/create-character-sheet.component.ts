import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObservedValueOf } from 'rxjs';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, FormArray, FormsModule } from '@angular/forms';

import { MatchService } from '../../../../services/match.service';
import { CharacterService } from '../../../../services/character.service';
import { LocationService } from '../../../../services/location.service';
import { FamilyService } from '../../../../services/family.service';

import { Character } from '../../../../services/data/Character';
import { Location } from '../../../../services/data/Location';

import { CreateCharacterIdentityFormComponent } from './create-character-forms/create-character-identity-form/create-character-identity-form.component';
import { CreateCharacterStatusFormComponent } from "./create-character-forms/create-character-status-form/create-character-status-form.component";
import { CreateCharacterFamilyFormComponent } from './create-character-forms/create-character-family-form/create-character-family-form.component';

import { CharacterSelectorComponent } from '../../../custom-inputs/selectors/character-selector/character-selector.component';
import { LocationSelectorComponent } from '../../../custom-inputs/selectors/location-selector/location-selector.component';
import { VolumeSelectorComponent } from '../../../custom-inputs/selectors/volume-selector/volume-selector.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faPlusCircle, faMinusCircle, faLeaf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-character-sheet',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, FormsModule,
    FontAwesomeModule,
    CharacterSelectorComponent,
    LocationSelectorComponent,
    VolumeSelectorComponent,
    CreateCharacterIdentityFormComponent,
    CreateCharacterStatusFormComponent,
    CreateCharacterFamilyFormComponent
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

    public FaGoBackIcon = faChevronLeft;
    public FaPlusIcon = faPlusCircle;
    public FaMinusIcon = faMinusCircle;
    public FaBiologicalIcon = faLeaf;

    public constructor(
        private router : Router,
        private matchService : MatchService, 
        private characterService : CharacterService, private locationService : LocationService,
        private familyService : FamilyService,
        private formBuilder : FormBuilder
    ) { }

    public createCharacterForm: FormGroup<ICreateCharacterForm> = this.formBuilder.group<ICreateCharacterForm>({ });

    public ngOnInit() : void
    {
        
    }

    public appendForm<TForm extends keyof ICreateCharacterForm>(
        formName: TForm, 
        formGroup: Exclude<ICreateCharacterForm[TForm], undefined>) : void
    {
        this.createCharacterForm.addControl(formName, formGroup);
    }

    public get fullName() : string | undefined
    {
        let characterName = this.createCharacterForm.get('characterIdentity')?.get('characterName')?.value;
        let characterBirthPlace = this.createCharacterForm.get('characterStatus')?.get('characterBirthPlace')?.value;

        return this.matchService.match(characterName, characterBirthPlace?.name);
    }

    public onSubmit() : void
    {
        console.log("Submitted");
        let toSubmit = this.createCharacterForm.value;
        this.characterService.CreateCharacter({
            name: toSubmit.characterIdentity.characterName,
            gender: toSubmit.characterIdentity.characterGender,
            birthPlaceId: toSubmit.characterStatus.characterBirthPlace.id,
            appearanceVolumeId: 1,
            deathVolumeId: null,
        }).subscribe(newCharacterID => {            
            this.familyService.CreateFamily((this.createCharacterForm.get('characterRelationships')?.get('characterFamilies') as FormArray).controls.map(family => {
                return {
                    childId: newCharacterID,
                    parent1Id: family.value.parent1Id,
                    parent2Id: family.value.parent2Id,
                    isBiological: family.value.isBiological
                };
            })).subscribe(response => {
                alert(this.fullName + " was created!");
                this.router.navigate(["browse"]);
            });
        });
    }

   

    
    
    
}

interface ICreateCharacterForm
{
    characterIdentity?: ObservedValueOf<CreateCharacterIdentityFormComponent['onFormReady']>;
    characterStatus?: ObservedValueOf<CreateCharacterStatusFormComponent['onFormReady']>;
    characterRelationships?: ObservedValueOf<CreateCharacterFamilyFormComponent['onFormReady']>;
}
