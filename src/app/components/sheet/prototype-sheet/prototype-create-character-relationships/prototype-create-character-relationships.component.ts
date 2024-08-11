import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BaseSheetCardComponent } from '../../base-sheet-card/base-sheet-card.component';
import { SheetCardComponent } from "../../sheet-card/sheet-card.component";
import { SheetCardPropertyComponent } from "../../sheet-card/sheet-card-property/sheet-card-property.component";
import { CharacterSelectorComponent } from "../../../custom-inputs/selectors/character-selector/character-selector.component";

import { QuantityControllerComponent } from '../../../custom-inputs/quantity-controller/quantity-controller.component';
import { isBoxedPrimitive } from 'util/types';

@Component({
  selector: 'app-prototype-create-character-relationships',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SheetCardComponent,
    SheetCardPropertyComponent,
    CharacterSelectorComponent,
    QuantityControllerComponent
],
  templateUrl: './prototype-create-character-relationships.component.html',
  styleUrl: './prototype-create-character-relationships.component.scss'
})

export class PrototypeCreateCharacterRelationshipsComponent extends BaseSheetCardComponent 
{
    public override formContent : FormGroup = this.formBuilder.group({
        parents: this.formBuilder.array([ ])
    });

    public get parents() : FormArray
    {
        return this.formContent.get('parents') as FormArray;
    }

    public addParents() : void
    {
        this.parents.push(this.formBuilder.group({
            parent1Id: [0, Validators.min(1)],
            parent2Id: [0, Validators.min(1)],
            isBiological: [false]
        }));
    }

    public removeParents() : void
    {
        this.parents.removeAt(-1);
    }
}
