import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Volume } from './data/Volume';
import { Series } from './data/Series';

@Injectable({
  providedIn: 'root'
})

export class VolumeService 
{

    constructor(private http : HttpClient) { }

    public GetVolumes() : Observable<Volume[]>
    {
        return this.http.get<Volume[]>(`http://localhost:5031/Volumes`);
    }

    public GetSeries() : Observable<Series[]>
    {
        return this.http.get<Series[]>(`http://localhost:5031/Volumes/series`);
    }

    public CreateVolume(newVolume : { 
        title: string,
        seriesId: number,
        bookNumber: number,
        pageCount?: number,
        summary?: string,
        publicationDate?: string,
        isbn?: string 
        }) : Observable<number>
    {
        return this.http.post<number>(`http://localhost:5031/Volumes`, newVolume);
    }
}
