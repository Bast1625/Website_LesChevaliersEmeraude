import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';

import { CharacterService } from '../../services/character.service';
import { FamilyService } from '../../services/family.service';
import { BrowseService } from '../../services/browse-services/browse.service';
import { MatchService } from '../../services/match.service';

import { Character } from '../../services/data/Character';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-character-sheet',
  standalone: true,
  imports: [
        CommonModule, RouterModule, 
        FontAwesomeModule
    ],
  templateUrl: './character-sheet.component.html',
  styleUrl: './character-sheet.component.scss'
})

export class CharacterSheetComponent implements OnInit, OnDestroy 
{
    public previousCharacter : Character | undefined;
    public nextCharacter : Character | undefined;

    public characterID : number = -1;
    public characterName : string = "";
    public characterGender : string = "";
    public characterState : string = "";
    public characterAlias : string = "";

    public characterJob : string = "";
    public characterBirthPlace : string = "";
    public characterHomePlaces : string[] = [];

    public characterAppearanceVolume : string = "";
    public characterDeathVolume : string = "";

    public characterBiologicalParents : Character[] = [];
    public characterStepParents : Character[] = [];
    public characterAdoptiveParents : Character[] = [];

    public characterBiologicalSiblings : Character[] = [];
    public characterStepSiblings : Character[] = [];
    public characterAdoptiveSiblings : Character[] = [];

    public characterBiologicalChildren : Character[] = [];
    public characterStepChildren : Character[] = [];
    public characterAdoptiveChildren : Character[] = [];

    public isKnight : boolean = false;
    public characterMasters : Character[] = [];
    public characterSquires : Character[] = [];

    public FaGoBackIcon = faChevronLeft;
    public FaPreviousIcon = faCaretLeft;
    public FaNextIcon = faCaretRight;

    public constructor(
        private currentRoute : ActivatedRoute, 
        private characterService : CharacterService,
        private familyService : FamilyService,
        private browseService : BrowseService,
        private matchService : MatchService
    ) { }

    public ngOnInit(): void 
    {
        this.currentRoute.params.subscribe(params => {
            this.characterID = parseInt(this.currentRoute.snapshot.params['id']); 
        
            this.characterService.GetCharacterByID(this.characterID).subscribe(response => {
                let character = JSON.parse(JSON.stringify(response));

                this.characterID = character['id'];
                this.characterName = character['name'];
                this.characterGender = character['gender'];
                this.characterState = character['deathVolume'] == null ? "Vivant" : "Décédé";

                if(character['birthPlace'] != null)
                    this.characterBirthPlace = character['birthPlace']['name'];
                else
                    this.characterBirthPlace = "Inconnu";

                if(character['homePlaces'].length > 0)
                    this.characterHomePlaces = character['homePlaces'].map((location: { id : number, name : string, gentilic: string }) => location.name);
                else
                    this.characterHomePlaces = [];

                if(character['appearanceVolume'] != null)
                    this.characterAppearanceVolume = `${character['appearanceVolume']['series']}: Tome ${character['appearanceVolume']['number']},  ${character['appearanceVolume']['title']}`;
                else
                    this.characterAppearanceVolume = "Inconnu";

                if(character['deathVolume'] != null)
                    this.characterDeathVolume = `${character['deathVolume']['series']}: Tome ${character['deathVolume']['number']}, ${character ['deathVolume']['title']}`;
                else
                    this.characterDeathVolume = "...";

                this.previousCharacter = this.browseService.getPreviousCharacter(this.characterID);
                this.nextCharacter = this.browseService.getNextCharacter(this.characterID);
            });
            
            this.characterService.GetAlias(this.characterID).subscribe(response => {
                this.characterAlias = response == undefined ? "" : response[0];
            });

            this.familyService.GetBiologicalParents(this.characterID).subscribe(response => {
                this.characterBiologicalParents = response == null ? [] : response;
            });
            this.familyService.GetStepParents(this.characterID).subscribe(response => {
                this.characterStepParents = response == null ? [] : response;
            });
            this.familyService.GetAdoptiveParents(this.characterID).subscribe(response => {
                this.characterAdoptiveParents = response == null ? [] : response;
            });

            this.familyService.GetBiologicalSiblings(this.characterID).subscribe(response => {
                this.characterBiologicalSiblings = response == null ? [] : response;
            });
            this.familyService.GetStepSiblings(this.characterID).subscribe(response => {
                this.characterStepSiblings = response == null ? [] : response;
            });
            this.familyService.GetAdoptiveSiblings(this.characterID).subscribe(response => {
                this.characterAdoptiveSiblings = response == null ? [] : response;
            });

            this.familyService.GetBiologicalChildren(this.characterID).subscribe(response => {
                this.characterBiologicalChildren = response == null ? [] : response;
            });
            this.familyService.GetStepChildren(this.characterID).subscribe(response => {
                this.characterStepChildren = response == null ? [] : response;
            });
            this.familyService.GetAdoptiveChildren(this.characterID).subscribe(response => {
                this.characterAdoptiveChildren = response == null ? [] : response;
            });

            this.characterService.IsKnight(this.characterID).subscribe(response => {
                this.isKnight = response;
                if( this.isKnight == false )
                    return;

                this.characterService.GetMasters(this.characterID).subscribe(response => {
                    this.characterMasters = response;
                });
    
                this.characterService.GetSquires(this.characterID).subscribe(response => {
                    this.characterSquires = response;
                });
            });
        }); 
    }

    public match(character : Character | { "name": string, "birthPlace" : string }) : string
    {
        return this.matchService.match(character.name, character.birthPlace) ?? "";
    }

    public ngOnDestroy(): void 
    {
        this.browseService.clear();
    }
}
