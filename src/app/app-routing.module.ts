import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:"perfil", component:ProfileComponent},
  {path:"vehiculos", component:ProfileComponent}, //TODO cambiar el componente cuando se cree
  {path:"trayectos", component:ProfileComponent}, //TODO cambiar el componente cuando se cree
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
