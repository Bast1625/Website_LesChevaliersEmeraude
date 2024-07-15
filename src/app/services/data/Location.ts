import { Character } from "./Character";

export class Location
{
    public id : number = -1;
    public name : string = "";
    public gentilic : string = "";
    public continent : string = "";
    public religion : Character | undefined;
}