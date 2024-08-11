import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { BaseSheetCardComponent } from '../../../../sheet/base-sheet-card/base-sheet-card.component';
import { SheetCardComponent } from "../../../../sheet/sheet-card/sheet-card.component";
import { SheetCardPropertyComponent } from '../../../../sheet/sheet-card/sheet-card-property/sheet-card-property.component';

import { CharacterService } from '../../../../../services/character.service';
import { MatchService } from '../../../../../services/match.service';

import { CharacterSelectorComponent } from "../../../../custom-inputs/selectors/character-selector/character-selector.component";
import { QuantityControllerComponent } from '../../../../custom-inputs/quantity-controller/quantity-controller.component';

@Component({
  selector: 'app-create-location-social',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CharacterSelectorComponent, QuantityControllerComponent,
    BaseSheetCardComponent,
    SheetCardComponent, SheetCardPropertyComponent
],
  templateUrl: './create-location-social.component.html',
  styleUrl: './create-location-social.component.scss'
})

export class CreateLocationSocialComponent extends BaseSheetCardComponent
{
    @Input() locationName : string | undefined = "";

    public override formContent : FormGroup = this.formBuilder.group({ 
        gentilic: [''],
        religion: [0],
        royalty: this.formBuilder.array([ this.formBuilder.group({
            sovereign1Id: [0],
            sovereign2Id: [ { value: 0, disabled: true } ]
        })])
    });

    public constructor(
        protected override formBuilder : FormBuilder, 
        private characterService : CharacterService, private matchService : MatchService) { super(formBuilder) }

    public override ngOnInit(): void 
    {
        this.royalty.at(0).get('sovereign1Id')?.valueChanges.subscribe((newSovereignId) => {
            let sovereign2IdInput = this.royalty.at(0).get('sovereign2Id');
            if(newSovereignId == 0 || newSovereignId == undefined)
            {
                sovereign2IdInput?.setValue(0);
                sovereign2IdInput?.disable();
            }
            else
            {
                sovereign2IdInput?.enable();
            }
        });

        super.ngOnInit();
    }

    public get royalty() : FormArray
    {
        return this.formContent.get('royalty') as FormArray;
    }

    public getFullRoyaltyName(royaltyId : number) : string | undefined
    {
        let sovereign1Id = this.royalty.at(royaltyId).get('sovereign1Id')?.value;
        let sovereign2Id = this.royalty.at(royaltyId).get('sovereign2Id')?.value;

        if(this.locationName == undefined)
            return undefined;

        return `Le Roi ${sovereign1Id} & la Reine ${sovereign2Id} de ${this.locationName}`;
    }

    public addSovereigns() : void
    {
        let newSovereigns = this.formBuilder.group({
            sovereign1Id: [ 0 ],
            sovereign2Id: [ { value: 0, disabled: true } ]
        });

        newSovereigns.get('sovereign1Id')?.valueChanges.subscribe((newSovereignId) => {
            let sovereign2IdInput = newSovereigns.get('sovereign2Id');
           
            if(newSovereignId == 0 || newSovereignId == undefined)
            {
                sovereign2IdInput?.setValue(0);
                sovereign2IdInput?.disable();
            }
            else
            {
                sovereign2IdInput?.enable();
            }
        });

        this.royalty.push(newSovereigns);
    }

    public removeSovereigns() : void
    {
        this.royalty.removeAt(-1);
    }
}
