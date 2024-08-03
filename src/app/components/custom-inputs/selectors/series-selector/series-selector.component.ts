import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

import { VolumeService } from '../../../../services/volume.service';

import { Series } from '../../../../services/data/Series';

import { CustomSelectorComponent } from '../custom-selector/custom-selector.component';

@Component({
  selector: 'series-selector',
  standalone: true,
  imports: [
      CommonModule,
      FormsModule
  ],
  templateUrl: '../custom-selector/custom-selector.component.html',
  styleUrl: '../custom-selector/custom-selector.component.scss',
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SeriesSelectorComponent),
        multi: true
    }
  ]
})

export class SeriesSelectorComponent extends CustomSelectorComponent
{
    public override defaultValue: { value: any; textContent: string; } = { value: { id: 0, title: "" }, textContent: "Aucune" };

    private series : Series[] = [];
    
    public constructor(private volumeService : VolumeService) { super(); }

    public override ngOnInit() : void 
    {
        this.volumeService.GetSeries().subscribe(response => {
            this.series = response;

            this.data = this.series.map(_series => { 
                return { 
                    value: { id: _series.id, title: _series.title }, 
                    textContent: _series.title 
                } 
            });
        });
    }
}
