import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BrowseComponent } from './components/browse/browse.component';
import { CreateComponent } from './components/create/create.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full"},
    { path: "home", component: HomeComponent },
    
    { path: "browse", component: BrowseComponent },
    { path: "browse/:name", component: BrowseComponent },

    { path: "create", component: CreateComponent },    
    { path: "edit", component: HomeComponent },    
    { path: "statistics", component: HomeComponent },    
    { path: "graphs", component: HomeComponent },    
    { path: "settings", component: HomeComponent },
    { path: "about", component: HomeComponent }    
];
