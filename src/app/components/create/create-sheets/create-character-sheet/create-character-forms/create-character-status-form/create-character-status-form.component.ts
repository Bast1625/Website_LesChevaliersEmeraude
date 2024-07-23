import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { MatchService } from '../../../../../../services/match.service';

import { Character } from '../../../../../../services/data/Character';

import { LocationSelectorComponent } from '../../../../../custom-inputs/selectors/location-selector/location-selector.component';
import { QuantityControllerComponent } from '../../../../../custom-inputs/quantity-controller/quantity-controller.component';

@Component({
  selector: 'app-create-character-status-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LocationSelectorComponent,
    QuantityControllerComponent
],
  templateUrl: './create-character-status-form.component.html',
  styleUrl: './create-character-status-form.component.scss'
})
export class CreateCharacterStatusFormComponent 
{
    @Output() public onFormReady : EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    public createCharacterStatusForm : FormGroup = this.formBuilder.group({     
        characterBirthPlace: [{ id: 0, name: 'Inconnu' }],
        characterHomePlaces: [{ id: 0, name: 'Inconnu' }],
        characterOccupations: this.formBuilder.array([
            this.formBuilder.group({
                name: [ '', Validators.required ],
                location: [{ id: 0, name: 'Inconnu' }]
            }),
        ])
    });

    public constructor(private formBuilder : FormBuilder, private matchService : MatchService) { }

    public match(character : Character | { "name": string, "birthPlace" : string }) : string
    {
        return this.matchService.matchNameLocation(character.name, character.birthPlace);
    }

    public ngOnInit() : void 
    {
        setTimeout(() => {
            this.onFormReady.emit(this.createCharacterStatusForm);
        }, 0);
    }

    public get characterOccupations() : FormArray
    {
        return this.createCharacterStatusForm.get('characterOccupations') as FormArray; 
    }

    public addOccupation() : void
    {
        this.characterOccupations.push(
            this.formBuilder.group({
                name: [ '', Validators.required ],
                location: [ { id: 0, name: 'Inconnu' } ]
            }
        ));
    }

    public removeOccupation() : void
    {
        this.characterOccupations.removeAt(-1);
    }
}
