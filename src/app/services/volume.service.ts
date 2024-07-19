import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Volume } from './data/Volume';

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
}
