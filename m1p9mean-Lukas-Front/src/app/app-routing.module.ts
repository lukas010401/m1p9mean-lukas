import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutPlatComponent } from './components/plats/ajout-plat/ajout-plat.component';
import { DetailsPlatComponent } from './components/plats/details-plat/details-plat.component';
import { ListePlatComponent } from './components/plats/liste-plat/liste-plat.component';
import { ConnexionComponent } from './components/utilisateurs/connexion/connexion.component';
import { InscriptionComponent } from './components/utilisateurs/inscription/inscription.component';

const routes: Routes = [
  { path: '', redirectTo: 'plats', pathMatch: 'full' },
  { path: 'plats', component: ListePlatComponent },
  { path: 'plats/:id', component: DetailsPlatComponent },
  { path: 'ajout-plat', component: AjoutPlatComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
