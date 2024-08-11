import { Component } from '@angular/core';

import { ReactiveFormsModule, FormGroup } from '@angular/forms';

import { BaseSheetCardComponent } from '../../../../sheet/base-sheet-card/base-sheet-card.component';
import { SheetCardComponent } from "../../../../sheet/sheet-card/sheet-card.component";
import { SheetCardPropertyComponent } from '../../../../sheet/sheet-card/sheet-card-property/sheet-card-property.component';

@Component({
  selector: 'app-create-location-geography',
  standalone: true,
  imports: [
        ReactiveFormsModule,

        BaseSheetCardComponent,
        SheetCardComponent, SheetCardPropertyComponent
    ],
  templateUrl: './create-location-geography.component.html',
  styleUrl: './create-location-geography.component.scss'
})
export class CreateLocationGeographyComponent extends BaseSheetCardComponent 
{
    public override formContent = this.formBuilder.group({
        name: [''],
        continent: [''],
        universe: ['']
    })
}
