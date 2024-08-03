import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';

import { BaseSheetCardComponent } from '../../../../sheet/base-sheet-card/base-sheet-card.component';
import { SheetCardComponent } from '../../../../sheet/sheet-card/sheet-card.component';
import { SheetCardPropertyComponent } from '../../../../sheet/sheet-card/sheet-card-property/sheet-card-property.component';

import { SeriesSelectorComponent } from '../../../../custom-inputs/selectors/series-selector/series-selector.component';

@Component({
  selector: 'app-create-volume-cover',
  standalone: true,
  imports: [
        ReactiveFormsModule,

        SheetCardComponent,
        SheetCardPropertyComponent,
        
        SeriesSelectorComponent
    ],
  templateUrl: './create-volume-cover.component.html',
  styleUrl: './create-volume-cover.component.scss'
})

export class CreateVolumeCoverComponent extends BaseSheetCardComponent
{
    public override formContent: FormGroup = this.formBuilder.group({
        title: [ '', Validators.required ],
        series: [ '', Validators.required ],
        bookNumber: [ { value: undefined, disabled: true }, Validators.required ],
    });

    public override ngOnInit(): void 
    {
        this.formContent.get('series')?.valueChanges.subscribe(value => {
            let bookNumberInput = this.formContent.get('bookNumber');
            
            if(value['id'] == 0 || value['id'] == undefined || value[' '])
            {
                bookNumberInput?.setValue(undefined);
                bookNumberInput?.disable();
            }
            else
            {
                bookNumberInput?.setValue(1);
                bookNumberInput?.enable();
            }
        })

        super.ngOnInit();
    }
}
