import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BrowseComponent } from './components/browse/browse.component';
import { CreateComponent } from './components/create/create.component';

import { BrowseCharactersViewComponent } from './components/browse/browse-views/browse-characters-view/browse-characters-view.component';
import { BrowseKnightsViewComponent } from './components/browse/browse-views/browse-knights-view/browse-knights-view.component';

import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';

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
            { path: "locations", component: BrowseKnightsViewComponent }
        ]
    },
    { path: "browse/characters/:id", component: CharacterSheetComponent },
    { path: "browse/knights/:id", component: CharacterSheetComponent },

    { path: "create", component: CreateComponent },    
    { path: "edit", component: HomeComponent },    
    { path: "statistics", component: HomeComponent },    
    { path: "graphs", component: HomeComponent },    
    { path: "settings", component: HomeComponent },
    { path: "about", component: HomeComponent }    
];
