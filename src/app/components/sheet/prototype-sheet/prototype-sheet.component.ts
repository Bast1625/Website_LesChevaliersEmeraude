import { Component, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

import { SheetComponent } from '../sheet.component';
import { SheetHeaderComponent } from '../sheet-header/sheet-header.component';
import { SheetBodyComponent } from '../sheet-body/sheet-body.component';
import { SheetCardComponent } from '../sheet-card/sheet-card.component';

import { CharacterService } from '../../../services/character.service';
import { MatchService } from '../../../services/match.service';

import { PrototypeCreateCharacterIdentityComponent } from './prototype-create-character-identity/prototype-create-character-identity.component';
import { PrototypeCreateCharacterStatusComponent } from './prototype-create-character-status/prototype-create-character-status.component';
import { PrototypeCreateCharacterRelationshipsComponent } from "./prototype-create-character-relationships/prototype-create-character-relationships.component";
import { PrototypeCreateCharacterTimelineComponent } from "./prototype-create-character-timeline/prototype-create-character-timeline.component";

@Component({
  selector: 'app-prototype-sheet',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SheetComponent, SheetHeaderComponent, SheetCardComponent, SheetBodyComponent,
    PrototypeCreateCharacterIdentityComponent,
    PrototypeCreateCharacterStatusComponent,
    PrototypeCreateCharacterRelationshipsComponent,
    PrototypeCreateCharacterTimelineComponent
],
  templateUrl: './prototype-sheet.component.html',
  styleUrl: './prototype-sheet.component.scss'
})

export class PrototypeSheetComponent 
{
    public form : FormGroup = this.formBuilder.group({ });

    public constructor(private formBuilder : FormBuilder, 
        private characterService : CharacterService, private matchService : MatchService) { }

    public appendForm(form : { name: string, content: FormGroup }) : void
    {
        this.form.addControl(form.name, form.content);
    }

    public create() : void
    {
        let birthPlaceId = this.form.get("status")?.get("birthPlace")?.value["id"];
        let appearanceVolumeId = this.form.get("timeline")?.get("appearanceVolumeId")?.value;
        let deathVolumeId = this.form.get("timeline")?.get("deathVolumeId")?.value;
        this.characterService.CreateCharacter({
            name: this.form.get("identity")?.get("name")?.value,
            gender: this.form.get("identity")?.get("gender")?.value,
            birthPlaceId: birthPlaceId == 0 ? null : birthPlaceId,
            appearanceVolumeId: appearanceVolumeId == 0 ? null : appearanceVolumeId,
            deathVolumeId: deathVolumeId == 0 ? null : deathVolumeId
        }).subscribe(response => alert("id: " + response));
    }

    public get characterName() : string
    {
        return this.form.get('identity')?.value.name;
    }

    public get fullName() : string | undefined
    {
        let name = this.characterName;
        let birthPlace = this.form.get('status')?.get("birthPlace")?.value["name"];

        return  this.matchService.match(name, birthPlace);
    }
}
