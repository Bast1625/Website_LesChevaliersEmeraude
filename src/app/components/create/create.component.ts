import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})

export class CreateComponent 
{
    public cards = [
        { name: 'Personnage', content: 'Ajouter un mortel ou un immortel'},
        { name: 'Lieu', content: 'Ajouter un lieu, un royaume, une île ou un panthéon'},
        { name: 'Tome', content: 'Ajouter un tome appartenant aux nombreuses séries fantastiques écrites par Anne Robillard'},
        { name: 'Race', content: 'Ajouter une race habitant les différents lieux'},
        { name: 'Profession', content: 'Établir les métiers ou les rôles des personnages'},

        { name: 'Famille', content: 'Établir les relations familiales entre plusieurs personnages'},
        { name: 'Souveraineté', content: 'Établir les souverains des différents royaumes d\'Enki\'Enlil'},
    ];
}
