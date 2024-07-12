import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { Character } from './data/Character';

@Injectable({
  providedIn: 'root'
})

export class FamilyService 
{
    public constructor(private http : HttpClient) { }

    public GetBiologicalParents(id : number) : Observable<Character[]>
    {
        return this.http.get<Character[]>(`http://localhost:5031/Families/${id}/parents`);
    }
    public GetStepParents(id : number) : Observable<Character[]>
    {
        return this.http.get<Character[]>(`http://localhost:5031/Families/${id}/parents/step`);
    }
    public GetAdoptiveParents(id : number) : Observable<Character[]>
    {
        return this.http.get<Character[]>(`http://localhost:5031/Families/${id}/parents/adoptive`);
    }

    public GetBiologicalSiblings(id : number) : Observable<Character[]>
    {
        return this.http.get<Character[]>(`http://localhost:5031/Families/${id}/siblings`);
    }
    public GetStepSiblings(id : number) : Observable<Character[]>
    {
        return this.http.get<Character[]>(`http://localhost:5031/Families/${id}/siblings/step`);
    }
    public GetAdoptiveSiblings(id : number) : Observable<Character[]>
    {
        return this.http.get<Character[]>(`http://localhost:5031/Families/${id}/siblings/adoptive`);
    }

    public GetBiologicalChildren(id : number) : Observable<Character[]>
    {
        return this.http.get<Character[]>(`http://localhost:5031/Families/${id}/children`);
    }
    public GetStepChildren(id : number) : Observable<Character[]>
    {
        return this.http.get<Character[]>(`http://localhost:5031/Families/${id}/children/step`);
    }
    public GetAdoptiveChildren(id : number) : Observable<Character[]>
    {
        return this.http.get<Character[]>(`http://localhost:5031/Families/${id}/children/adoptive`);
    }
}
