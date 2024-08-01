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
}
