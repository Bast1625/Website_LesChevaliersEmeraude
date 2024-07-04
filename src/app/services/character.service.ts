import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CharacterService 
{
    private readonly API_URL : string = "http://localhost:5031/Characters"
    public constructor(private http : HttpClient) { }
    
    public GetCharacters()
    {
        return this.http.get(this.API_URL);  
    }
}
