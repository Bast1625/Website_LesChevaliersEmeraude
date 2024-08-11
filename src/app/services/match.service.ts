import { Injectable } from '@angular/core';

import { locations_prefixes } from './locations-prefixes.json'

@Injectable({
  providedIn: 'root'
})

export class MatchService 
{
    public match(name : string, location : string) : string | undefined
    {
        if(name == "" || name == undefined)
            return undefined;

        if(location == undefined)
            return name;

        let prefix = locations_prefixes.find(prefix => prefix.name == location)?.prefix;

        if(prefix == undefined)
            return name;
        
        return `${name} ${prefix}${location}`;
    }

    public series_volumeNumber(series: string, volumeNumber: number)
    {
        if(series == "" || series == undefined)
            return undefined;

        return `${series}, Tome ${volumeNumber}`;
    }

    public sovereigns_location(
        sovereign1 : { name : string, gender : string }, 
        sovereign2: { name : string, gender : string}, 
        locationName: string) : string
    {
        return "";
    }
}
