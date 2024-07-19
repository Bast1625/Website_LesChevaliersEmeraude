import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { LocationService } from '../../../services/location.service';

import { Location } from '../../../services/data/Location';

import { CustomSelectorComponent } from '../custom-selector/custom-selector.component';

@Component({
  selector: 'location-selector',
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
        useExisting: forwardRef(() => LocationSelectorComponent),
        multi: true
    }
  ]
})

export class LocationSelectorComponent extends CustomSelectorComponent
{
    public override defaultValue: { value: any; textContent: string; } = { value: { id: 0, name: "" }, textContent: "Inconnu" };

    private locations : Location[] = [];
    
    public constructor(private locationService : LocationService) { super(); }

    public override ngOnInit() : void 
    {
        this.locationService.GetLocations().subscribe(response => {
            this.locations = response;

            this.data = this.locations.map(location => { 
                return { 
                    value: { id: location.id, name: location.name }, 
                    textContent: location.name 
                } 
            });
        });
    }
}
