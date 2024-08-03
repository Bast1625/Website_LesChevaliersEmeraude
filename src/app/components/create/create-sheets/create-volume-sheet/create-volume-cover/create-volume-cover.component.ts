import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { pairwise, startWith } from 'rxjs';

import { BaseSheetCardComponent } from '../../../../sheet/base-sheet-card/base-sheet-card.component';
import { SheetCardComponent } from '../../../../sheet/sheet-card/sheet-card.component';
import { SheetCardPropertyComponent } from '../../../../sheet/sheet-card/sheet-card-property/sheet-card-property.component';

import { VolumeService } from '../../../../../services/volume.service';
import { Volume } from '../../../../../services/data/Volume';

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
        bookNumber: [ { value: undefined, disabled: true }, [ Validators.required, (value : number) => value != 0 ] ],
    });

    public volumesFromSeries : Volume[] = [];
    public constructor(private volumeService : VolumeService, protected override formBuilder : FormBuilder ) { super(formBuilder) }

    public override ngOnInit(): void 
    {
        this.formContent.get('series')?.valueChanges.subscribe(newSeries => {
            let bookNumberInput = this.formContent.get('bookNumber');

            if(newSeries['id'] == 0 || newSeries['id'] == undefined)
            {
                bookNumberInput?.setValue(undefined);
                bookNumberInput?.disable();
            }
            else
            {
                this.volumeService.GetVolumesBySeries(newSeries['id']).subscribe(volumesFromSeries => {
                    this.volumesFromSeries = volumesFromSeries == undefined ? [] : volumesFromSeries;
                    
                    let earliestAvailableBookNumber = this.volumeService.GetEarliestAvailableBookNumber(this.volumesFromSeries);

                    bookNumberInput?.setValue(earliestAvailableBookNumber);
                    bookNumberInput?.enable();
                });
            }
        });

        this.formContent.get('bookNumber')?.valueChanges.pipe(startWith(null), pairwise()).subscribe(([previousBookNumber, newBookNumber]) => {
            if(newBookNumber == undefined)
                return;

            let sign = Math.sign(newBookNumber - previousBookNumber);
            if(sign == 0)
                return;

            let trueBookNumber = newBookNumber;
            while(trueBookNumber == 0 || this.volumesFromSeries.some(volume => volume.number == trueBookNumber))
            {
                if(trueBookNumber == 0)
                    sign = 1;

                trueBookNumber += sign;
            }

            this.formContent.get('bookNumber')?.setValue(trueBookNumber);
        });

        super.ngOnInit();
    }
}
