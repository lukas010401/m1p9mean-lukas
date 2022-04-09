import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminTestComponent } from './components/admin/board-admin-test/board-admin-test.component';
import { AjoutPlatComponent } from './components/plats/ajout-plat/ajout-plat.component';
import { DetailsPlatComponent } from './components/plats/details-plat/details-plat.component';
import { ListePlatComponent } from './components/plats/liste-plat/liste-plat.component';
import { ConnexionComponent } from './components/utilisateurs/connexion/connexion.component';
import { InscriptionComponent } from './components/utilisateurs/inscription/inscription.component';
import { ProfilComponent } from './components/utilisateurs/profil/profil.component';

const routes: Routes = [
  { path: '', redirectTo: 'plats', pathMatch: 'full' },
  { path: 'plats', component: ListePlatComponent },
  { path: 'plats/:id', component: DetailsPlatComponent },
  { path: 'ajout-plat', component: AjoutPlatComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'admin', component: BoardAdminTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
