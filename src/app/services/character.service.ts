import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Character } from './data/Character';
import { Knight } from './data/Knight';

@Injectable({
  providedIn: 'root'
})

export class CharacterService 
{
    public constructor(private http : HttpClient) { }
    
    public GetCharacters() : Observable<Character[]>
    {
        return this.http.get<Character[]>("http://localhost:5031/Characters");  
    }

    public GetCharacterByID(id : number) : Observable<Character>
    {
        return this.http.get<Character>(`http://localhost:5031/Characters/${id}`);
    }

    public GetAlias(id : number) : Observable<string[]>
    {
        return this.http.get<string[]>(`http://localhost:5031/Characters/${id}/alias`);
    }

    public CreateCharacter(newCharacter : { 
        name: string, 
        gender: string, 
        birthPlaceId: number | null, 
        appearanceVolumeId: number | null, 
        deathVolumeId: number | null }) : Observable<number>
    {
        return this.http.post<number>(`http://localhost:5031/Characters`, newCharacter);
    }

    public GetKnights() : Observable<Knight[]>
    {
        return this.http.get<Knight[]>(`http://localhost:5031/Knights`)
    }

    public IsKnight(id : number) : Observable<boolean>
    {
        return this.http.get<boolean>(`http://localhost:5031/Knights/${id}/isKnight`)
    }

    public GetMasters(id : number) : Observable<Character[]>
    {
        return this.http.get<Character[]>(`http://localhost:5031/Knights/${id}/master`);
    }

    public GetSquires(id : number) : Observable<Character[]>
    {
        return this.http.get<Character[]>(`http://localhost:5031/Knights/${id}/squires`);
    }
}
