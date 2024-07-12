import { Injectable } from '@angular/core';
import { Character } from './data/Character';

@Injectable({
  providedIn: 'root'
})

export class BrowseService 
{
    private characters : Character[] = [];

    public set(characters : Character[])
    {
        this.characters = characters;
    }
    public clear()
    {
        this.characters = [];
    }

    public getCharacterByID(id : number) : Character | undefined
    {
        return this.characters.find(character => character.id == id);
    }
    public getCharacterAt(id : number) : Character | undefined
    {
        if(id < 0 || id >= this.characters.length)
            return undefined;

        return this.characters[id]; 
    }

    public getPreviousCharacter(id : number) : Character | undefined
    {
        let characterIndex = this.characters.findIndex(character => character.id == id);

        if(characterIndex == -1 || characterIndex - 1 < 0)
            return undefined;

        return this.getCharacterAt(characterIndex - 1);
    }
    public getNextCharacter(id : number) : Character | undefined
    {
        let characterIndex = this.characters.findIndex(character => character.id == id);

        if(characterIndex == -1 || characterIndex + 1 > this.characters.length)
            return undefined;

        return this.getCharacterAt(characterIndex + 1);
    }
}
