import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CharacterCardComponent } from './browse-cards/character-card/character-card.component';

import { CharacterService } from '../../services/character.service';
import { Character } from '../../services/data/Character';
import { BrowseService } from '../../services/browse-services/browse.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink,
    CommonModule,
    CharacterCardComponent
  ],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})

export class BrowseComponent implements OnInit
{
    public activeTab : string = "";
    public characters : Character[] = [];

    public datasetSize : number = 0;

    public constructor(
        private router : Router, 
        private route : ActivatedRoute, 
        private characterService : CharacterService, 
        private browseService : BrowseService
    ) { }

    public ngOnInit(): void 
    {
        this.activeTab = "characters";
    }

    public changeTab(nextTab : string) : void
    {
        this.activeTab = nextTab;

        this.router.navigate([`./${nextTab}`], { relativeTo: this.route });
    }

    public setDatasetSize(size : number) : void
    {
        this.datasetSize = size;
    }
 
}
