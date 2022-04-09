import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutPlatComponent } from './components/plats/ajout-plat/ajout-plat.component';
import { DetailsPlatComponent } from './components/plats/details-plat/details-plat.component';
import { ListePlatComponent } from './components/plats/liste-plat/liste-plat.component';
import { InscriptionComponent } from './components/utilisateurs/inscription/inscription.component';
import { ConnexionComponent } from './components/utilisateurs/connexion/connexion.component';
import { BoardAdminTestComponent } from './components/admin/board-admin-test/board-admin-test.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutPlatComponent,
    DetailsPlatComponent,
    ListePlatComponent,
    InscriptionComponent,
    ConnexionComponent,
    BoardAdminTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
