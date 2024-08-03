import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BrowseComponent } from './components/browse/browse.component';
import { CreateComponent } from './components/create/create.component';

import { BrowseCharactersViewComponent } from './components/browse/browse-views/browse-characters-view/browse-characters-view.component';
import { BrowseKnightsViewComponent } from './components/browse/browse-views/browse-knights-view/browse-knights-view.component';
import { BrowseLocationsViewComponent } from './components/browse/browse-views/browse-locations-view/browse-locations-view.component';
import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';
import { PrototypeSheetComponent } from './components/sheet/prototype-sheet/prototype-sheet.component';

import { CreateCharacterSheetComponent } from './components/create/create-sheets/create-character-sheet/create-character-sheet.component';
import { CreateVolumeSheetComponent } from './components/create/create-sheets/create-volume-sheet/create-volume-sheet.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full"},
    { path: "home", component: HomeComponent },

    { 
        path: "browse", 
        component: BrowseComponent,
        children: [
            { path: "", redirectTo: "characters", pathMatch: "prefix" },
            { path: "characters", component: BrowseCharactersViewComponent },
            { path: "knights", component: BrowseKnightsViewComponent },
            { path: "locations", component: BrowseLocationsViewComponent }
        ]
    },
    { path: "browse/characters/:id", component: CharacterSheetComponent },
    { path: "browse/knights/:id", component: CharacterSheetComponent },

    { path: "create", component: CreateComponent },
    { path: "create/character", component: CreateCharacterSheetComponent },
    { path: "create/volume", component: CreateVolumeSheetComponent },
    { path: "create/prototype", component: PrototypeSheetComponent },

    { path: "edit", component: HomeComponent },    
    { path: "statistics", component: HomeComponent },    
    { path: "graphs", component: HomeComponent },    
    { path: "settings", component: HomeComponent },
    { path: "about", component: HomeComponent }    
];
