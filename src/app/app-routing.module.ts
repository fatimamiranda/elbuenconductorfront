import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { TrayectosComponent } from './components/trayectos/trayectos.component';
import { DatospersonalesComponent } from './components/datospersonales/datospersonales.component';
import { DetalletrayectoComponent } from './components/detalletrayecto/detalletrayecto.component';


const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent,  pathMatch: 'full'},
  {path: 'login', component: LoginComponent,  pathMatch: 'full'},
  {path:"perfil", component:ProfileComponent},
  {path:"vehiculos", component:VehiculosComponent}, 
  {path:"trayectos", component:TrayectosComponent},
  {path:"datospersonales", component:DatospersonalesComponent}, 
  {path:"detalletrayecto/:dni/:id", component:DetalletrayectoComponent}, 
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
