import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

import { VolumeService } from '../../../../services/volume.service';

import { Volume } from '../../../../services/data/Volume';

import { CustomSelectorComponent } from '../custom-selector/custom-selector.component';

@Component({
  selector: 'volume-selector',
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
        useExisting: forwardRef(() => VolumeSelectorComponent),
        multi: true
    }
  ]
})

export class VolumeSelectorComponent extends CustomSelectorComponent
{
    public override defaultValue: { value: any; textContent: string; } = { value: 0, textContent: "Aucun" };

    private volumes : Volume[] = [];
    
    public constructor(private volumeService : VolumeService) { super(); }

    public override ngOnInit() : void 
    {
        this.volumeService.GetVolumes().subscribe(response => {
            this.volumes = response;

            this.data = this.volumes.map(volume => { 
                return { 
                    value: volume.id, 
                    textContent: `${volume.series} #${volume.number}: ${volume.title}` 
                } 
            });
        });
    }
}
