import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';

import { BaseSheetCardComponent } from '../../../../sheet/base-sheet-card/base-sheet-card.component';
import { SheetCardComponent } from '../../../../sheet/sheet-card/sheet-card.component';
import { SheetCardPropertyComponent } from '../../../../sheet/sheet-card/sheet-card-property/sheet-card-property.component';

@Component({
  selector: 'app-create-volume-metadata',
  standalone: true,
  imports: [
        ReactiveFormsModule,

        SheetCardComponent,
        SheetCardPropertyComponent
    ],
  templateUrl: './create-volume-metadata.component.html',
  styleUrl: './create-volume-metadata.component.scss'
})

export class CreateVolumeMetadataComponent extends BaseSheetCardComponent
{
    public override formContent: FormGroup = this.formBuilder.group({
        publicationDate: [''],
        publicationLocation: [ { value: 'Québec', disabled: true } ],
        isbn: [''],
        author: [ { value: 'Anne Robillard', disabled: true } ],
        editor: [ { value: 'Éditions de Mortagne', disabled: true } ]
    });
}
