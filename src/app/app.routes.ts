import { Routes } from '@angular/router';
import { VetementsComponent } from './vetements/vetements';
import { AddVetementComponent } from './add-vetement/add-vetement';
import { UpdateVetementComponent } from './update-vetement/update-vetement';
import { RechercheParType } from './recherche-par-type/recherche-par-type';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';
import { Login } from './login/login';
import { Forbidden } from './forbidden/forbidden';
import { vetementGuard } from './vetement-guard';

export const routes: Routes = [
  { path: 'vetements', component: VetementsComponent },
  { path: 'add-vetement', component: AddVetementComponent ,canActivate:[vetementGuard] },
  {path: "updateVetement/:id", component: UpdateVetementComponent},
  {path: "", redirectTo: "vetements", pathMatch: "full"},
  {path: "rechercheParType", component : RechercheParType},
  {path: 'login', component: Login},
  {path: 'rechercheParNom',component: RechercheParNom},
  {path: 'app-forbidden', component: Forbidden},
 
];



