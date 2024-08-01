import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

import { BaseSheetCardComponent } from '../../base-sheet-card/base-sheet-card.component';
import { SheetCardComponent } from "../../sheet-card/sheet-card.component";
import { SheetCardPropertyComponent } from '../../sheet-card/sheet-card-property/sheet-card-property.component';
import { VolumeSelectorComponent } from "../../../custom-inputs/selectors/volume-selector/volume-selector.component";

@Component({
  selector: 'app-prototype-create-character-timeline',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    BaseSheetCardComponent, SheetCardComponent, SheetCardPropertyComponent,
    VolumeSelectorComponent
],
  templateUrl: './prototype-create-character-timeline.component.html',
  styleUrl: './prototype-create-character-timeline.component.scss'
})

export class PrototypeCreateCharacterTimelineComponent extends BaseSheetCardComponent
{
    public override formContent : FormGroup = this.formBuilder.group({
        appearanceVolumeId: [0],
        deathVolumeId: [0]
    });
}
