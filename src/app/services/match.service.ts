import { Injectable } from '@angular/core';

import { locations_prefixes } from './locations-prefixes.json'

@Injectable({
  providedIn: 'root'
})

export class MatchService 
{
    public matchNameLocation(name : string, location : string)
    {
        if(location == undefined)
            return `${name}`;

        let location_prefix : {name : string, prefix : string} | undefined = locations_prefixes.find(prefix => prefix.name == location);
     
        let prefix = location_prefix == undefined ? "" : location_prefix.prefix;
        
        return `${name} ${prefix}${location}`;
    }
}
