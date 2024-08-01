import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BaseSheetCardComponent } from '../../base-sheet-card/base-sheet-card.component';
import { SheetCardComponent } from '../../sheet-card/sheet-card.component';
import { SheetCardPropertyComponent } from '../../sheet-card/sheet-card-property/sheet-card-property.component';

@Component({
  selector: 'app-prototype-create-character-identity',
  standalone: true,
  imports: [
        ReactiveFormsModule,
        SheetCardComponent, SheetCardPropertyComponent
    ],
  templateUrl: './prototype-create-character-identity.component.html',
  styleUrl: './prototype-create-character-identity.component.scss'
})

export class PrototypeCreateCharacterIdentityComponent extends BaseSheetCardComponent
{
    public override formContent : FormGroup = this.formBuilder.group({
        name: ['', Validators.required],
        gender: ['M']
    });
}
