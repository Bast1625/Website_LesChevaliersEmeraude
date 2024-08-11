import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

import { SheetComponent } from '../../../sheet/sheet.component';
import { SheetHeaderComponent } from '../../../sheet/sheet-header/sheet-header.component';
import { SheetBodyComponent } from '../../../sheet/sheet-body/sheet-body.component';
import { SheetCardComponent } from '../../../sheet/sheet-card/sheet-card.component';

import { CreateLocationGeographyComponent } from './create-location-geography/create-location-geography.component';
import { CreateLocationSocialComponent } from './create-location-social/create-location-social.component';

@Component({
  selector: 'app-create-location-sheet',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SheetComponent, SheetHeaderComponent, SheetCardComponent, SheetBodyComponent,
    CreateLocationGeographyComponent, CreateLocationSocialComponent
  ],
  templateUrl: './create-location-sheet.component.html',
  styleUrl: './create-location-sheet.component.scss'
})

export class CreateLocationSheetComponent 
{
    public form : FormGroup = this.formBuilder.group({ });

    public constructor(private Router: Router, private formBuilder : FormBuilder) { }
    public appendForm(form : { name: string, content: FormGroup }) : void
    {
        this.form.addControl(form.name, form.content);
    }

    public create() : void
    {

    }

    public get locationName() : string | undefined
    {
        let locationName = this.form.get('geography')?.get('name')?.value;
        
        return locationName == undefined || locationName.length == 0 ? undefined : locationName;
    }
}
