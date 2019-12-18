import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegistreComponent } from './components/registre/registre.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { TrayectosComponent } from './components/trayectos/trayectos.component';


const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent,  pathMatch: 'full'},
  {path: 'login', component: LoginComponent,  pathMatch: 'full'},
  {path:"perfil", component:ProfileComponent},
  {path:"vehiculos", component:VehiculosComponent}, 
  {path:"trayectos", component:TrayectosComponent}, 
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
