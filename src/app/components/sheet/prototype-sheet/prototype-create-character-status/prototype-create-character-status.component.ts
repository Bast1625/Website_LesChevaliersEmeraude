import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';

import { MatchService } from '../../../../services/match.service';

import { SheetCardComponent } from '../../sheet-card/sheet-card.component';
import { SheetCardPropertyComponent } from '../../sheet-card/sheet-card-property/sheet-card-property.component';
import { BaseSheetCardComponent } from '../../base-sheet-card/base-sheet-card.component';

import { LocationSelectorComponent } from "../../../custom-inputs/selectors/location-selector/location-selector.component";
import { QuantityControllerComponent } from "../../../custom-inputs/quantity-controller/quantity-controller.component";
import { CharacterSelectorComponent } from "../../../custom-inputs/selectors/character-selector/character-selector.component";

@Component({
  selector: 'app-prototype-create-character-status',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SheetCardComponent,
    SheetCardPropertyComponent,
    LocationSelectorComponent,
    QuantityControllerComponent,
    CharacterSelectorComponent,
    BaseSheetCardComponent
],
  templateUrl: './prototype-create-character-status.component.html',
  styleUrl: './prototype-create-character-status.component.scss'
})

export class PrototypeCreateCharacterStatusComponent extends BaseSheetCardComponent
{
    @Input() public characterName : string = "";

    public override formContent : FormGroup = this.formBuilder.group({
        birthPlace: [''],
        homePlacesIds: this.formBuilder.array([ ])
    });
//['', Validators.required] 
    public constructor(protected override formBuilder : FormBuilder, private matchService : MatchService) { super(formBuilder); }

    public get homePlaces() : FormArray
    {
        
        return this.formContent.get('homePlacesIds') as FormArray;
    }

    public addHomePlace() : void
    {
        this.homePlaces.push(this.formBuilder.control(0, Validators.required));
    }

    public removeHomePlace() : void
    {
        this.homePlaces.removeAt(-1);
    }

    public getFullName(location : AbstractControl) : string | undefined
    {
        return this.matchService.match(this.characterName, location.value["name"]);
    }
}
