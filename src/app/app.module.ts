import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Google Maps Module
import { AgmCoreModule } from '@agm/core';

// Material Modules //
  // (mat-slide-toggle, mat-slider, matTooltip) gesture support
import 'hammerjs';
  // Some Material components depend on the Angular BrowserAnimationsModule for transitions
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// Routing Module
import { AppRoutingModule } from './app.routing.module';

// App components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToolbarComponent } from './nav/toolbar/toolbar.component';
import { SidenavListComponent } from './nav/sidenav-list/sidenav-list.component';
import { EraComponent } from './main/era/era.component';
import { ErasComponent } from './main/eras/eras.component';
import { SeasonComponent } from './main/season/season.component';
import { RaceComponent } from './main/race/race.component';
import { ProgramComponent } from './main/race/program/program.component';
import { CircuitComponent } from './main/race/circuit/circuit.component';
import { ResultsComponent } from './main/race/results/results.component';
import { OverviewComponent } from './main/race/overview/overview.component';
import { ConstructorsComponent } from './main/season/constructors/constructors.component';
import { DriversComponent } from './main/season/drivers/drivers.component';
// Services
import { GpDataService } from './main/gp.data.service';

// Models
import { Eras } from './main/eras.model';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    ToolbarComponent,
    EraComponent,
    ErasComponent,
    SeasonComponent,
    SidenavListComponent,
    RaceComponent,
    ProgramComponent,
    CircuitComponent,
    ResultsComponent,
    OverviewComponent,
    ConstructorsComponent,
    DriversComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD7xsaudIFMRetCwhUjfMievRXg1dVHZCw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
