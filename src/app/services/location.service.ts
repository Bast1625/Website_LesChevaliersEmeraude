import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Location } from './data/Location';

@Injectable({
  providedIn: 'root'
})
export class LocationService 
{
    public constructor(private http : HttpClient) { }

    public GetLocations() : Observable<Location[]>
    {
        return this.http.get<Location[]>("http://localhost:5031/Locations");
    }
}
