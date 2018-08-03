import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EraComponent } from './main/era/era.component';
import { ErasComponent } from './main/eras/eras.component';
import { SeasonComponent } from './main/season/season.component';
import { RaceComponent } from './main/race/race.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'era/:id', component: EraComponent },
    {path: 'eras', component: ErasComponent},
    {path: 'season/:id', component: SeasonComponent},
    {path: 'season/:id/:round', component: RaceComponent},
        {path: 'not-found', component: PageNotFoundComponent},
        {path: '**', redirectTo: 'not-found'}
];

@NgModule(
    {
        imports: [ RouterModule.forRoot(appRoutes)],
        exports: [ RouterModule ]
    }
)

export class AppRoutingModule {
}
