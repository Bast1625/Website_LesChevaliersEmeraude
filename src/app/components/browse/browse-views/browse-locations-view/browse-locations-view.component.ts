import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationCardComponent } from '../../browse-cards/location-card/location-card.component';

import { LocationService } from '../../../../services/location.service';

import { Location } from '../../../../services/data/Location';

@Component({
  selector: 'app-browse-locations-view',
  standalone: true,
  imports: [
    CommonModule,
    LocationCardComponent
  ],
  templateUrl: './browse-locations-view.component.html',
  styleUrl: './browse-locations-view.component.scss'
})

export class BrowseLocationsViewComponent implements OnInit
{
    public locations : Location[] = [];

    public constructor(private locationService : LocationService) { }

    public ngOnInit() : void
    {
        this.locationService.GetLocations().subscribe(response => {
            this.locations = response;
        });
    }
}
