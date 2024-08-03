import { Component } from '@angular/core';
import { BaseSheetCardComponent } from '../../../../sheet/base-sheet-card/base-sheet-card.component';
import { ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';

import { SheetCardComponent } from '../../../../sheet/sheet-card/sheet-card.component';
import { SheetCardPropertyComponent } from '../../../../sheet/sheet-card/sheet-card-property/sheet-card-property.component';

@Component({
  selector: 'app-create-volume-content',
  standalone: true,
  imports: [
        ReactiveFormsModule,

        SheetCardComponent,
        SheetCardPropertyComponent
    ],
  templateUrl: './create-volume-content.component.html',
  styleUrl: './create-volume-content.component.scss'
})

export class CreateVolumeContentComponent extends BaseSheetCardComponent
{
    public override formContent: FormGroup = this.formBuilder.group({
        pageCount: [ undefined ],
        chapterCount: [ undefined ],
        summary: ['']
    });
}
