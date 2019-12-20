
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { TrayectosComponent } from './components/trayectos/trayectos.component';
import { PanelexpansionComponent } from './components/panelexpansion/panelexpansion.component';
import { DatospersonalesComponent } from './components/datospersonales/datospersonales.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { TrayectosService } from './services/trayectos.service';
import { VehiculoService } from './services/vehiculo.service';
import { ModalModule } from './modal/modal.module';
import { DetalletrayectoComponent } from './components/detalletrayecto/detalletrayecto.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    HomeComponent,
    VehiculosComponent,
    TrayectosComponent,
    PanelexpansionComponent,
    DatospersonalesComponent,
    BreadcrumbComponent,
    DetalletrayectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PrimengModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule 
  ],
  providers: [ProfileService, LoginService, TrayectosService, VehiculoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
