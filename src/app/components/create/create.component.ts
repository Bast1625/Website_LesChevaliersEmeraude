import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
        CommonModule,
        
    ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})

export class CreateComponent 
{
    public cards = [
        
        { name: 'Personnage', content: 'Ajouter un personnage et l\'intégrer avec les autres éléments tels que ses relations familiales ou les lieux d\'habitation.', route: 'character'},

        { name: 'Lieu', content: 'Ajouter un lieu, un royaume, une île ou un panthéon', route: 'location'},
        { name: 'Tome', content: 'Ajouter un tome appartenant aux nombreuses séries fantastiques écrites par Anne Robillard', route: 'volume'},
        { name: 'Race', content: 'Ajouter une race habitant les différents lieux', route: 'character'},
        { name: 'Profession', content: 'Établir les métiers ou les rôles des personnages', route: 'character'},

        { name: 'Famille', content: 'Établir les relations familiales entre plusieurs personnages', route: 'character'},
        { name: 'Souveraineté', content: 'Établir les souverains des différents royaumes d\'Enki\'Enlil', route: 'character'},
        { name: 'Prototype', content: 'Pour le développement d\'une feuille réutilisable', route: 'prototype' }
    ];

    public constructor(private router : Router, private route : ActivatedRoute) { }

    public goToCreateCharacterForm(card : { name : string, content : string, route : string }) : void
    {
        this.router.navigate([card.route], { relativeTo: this.route });
    }
}
