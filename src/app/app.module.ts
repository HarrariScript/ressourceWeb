import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { RessourceComponent } from './ressource/ressource.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import {EntrepriseService} from './services/entreprise.service';
import {RessourceService} from './services/ressource.service';

const appRoutes: Routes = [
  {
    path: 'ressource', component: RessourceComponent
  }
  ,
  {
    path: 'entreprise', component: EntrepriseComponent
  },

  {
    path: '', redirectTo: '/ressource', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RessourceComponent,
    EntrepriseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule

  ],
  providers: [EntrepriseService,RessourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
