
//Módulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PrimengModule } from './primeng/primeng.module';
import { MaterialModule } from './material/material.module';

//Componentes
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileService } from './services/profile.service';
import { LoginService } from './services/login.service';
import { HomeComponent } from './components/home/home.component';
import { RegistreComponent } from './components/registre/registre.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './services/user.service';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { TrayectosComponent } from './components/trayectos/trayectos.component';
import { PanelexpansionComponent } from './components/panelexpansion/panelexpansion.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    HomeComponent,
    RegistreComponent,
    VehiculosComponent,
    TrayectosComponent,
    PanelexpansionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PrimengModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ProfileService, LoginService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
