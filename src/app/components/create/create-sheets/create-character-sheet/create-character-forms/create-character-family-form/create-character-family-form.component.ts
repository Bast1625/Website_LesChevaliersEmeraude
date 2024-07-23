import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { MatchService } from '../../../../../../services/match.service';

import { Character } from '../../../../../../services/data/Character';

import { QuantityControllerComponent } from '../../../../../custom-inputs/quantity-controller/quantity-controller.component';
import { CharacterSelectorComponent } from "../../../../../custom-inputs/selectors/character-selector/character-selector.component";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-character-family-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    QuantityControllerComponent,
    CharacterSelectorComponent
],
  templateUrl: './create-character-family-form.component.html',
  styleUrl: './create-character-family-form.component.scss'
})

export class CreateCharacterFamilyFormComponent implements OnInit
{
    @Output() public onFormReady : EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    public createCharacterFamilyForm : FormGroup = this.formBuilder.group({
        characterFamilies: this.formBuilder.array([
            this.formBuilder.group({
                parent1Id: [0],
                parent2Id: [0],
                isBiological: [true]
            }),
        ])
    });

    public FaBiologicalIcon = faLeaf;

    public constructor(private formBuilder : FormBuilder) { }

    public ngOnInit() : void 
    {
        setTimeout(() => {
            this.onFormReady.emit(this.createCharacterFamilyForm);
        }, 0);
    }

    public get characterFamilies() : FormArray
    {
        return this.createCharacterFamilyForm.get('characterFamilies') as FormArray;
    }

    public addFamily() : void
    {
        this.characterFamilies.push(
            this.formBuilder.group({
                parent1Id: [0],
                parent2Id: [0],
                isBiological: false
            }
        ));
    }

    public removeFamily() : void
    {
        this.characterFamilies.removeAt(-1);

        if(!this.characterFamilies.controls.some(family => family.value.isBiological))
            this.characterFamilies.at(-1).value.isBiological = true;
    }

    public markAsBiological(family : { isBiological : boolean }) : void
    {
        this.characterFamilies.controls.forEach(family => family.value.isBiological = false);

        family.isBiological = true;
    }
}
