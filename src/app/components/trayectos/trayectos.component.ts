import { Component, OnInit } from '@angular/core';
import { Trayecto } from 'src/app/model/Trayecto';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { TrayectosService } from 'src/app/services/trayectos.service';


@Component({
  selector: 'app-trayectos',
  templateUrl: './trayectos.component.html',
  styleUrls: ['./trayectos.component.css']
})
export class TrayectosComponent implements OnInit {
  
  trayectos:Trayecto[] = undefined;
  inicio:Date = undefined;
  fin:Date =undefined;
  trayecto:Trayecto = undefined;
  
  constructor(private router:Router, 
              private trayectosService:TrayectosService, 
              private loginService:LoginService) { }

  ngOnInit() {
    
    this.trayectos = [];
    

  }

  getTrayectosOut(inicio:Date, fin:Date){

    let inicioStr:string;
    let finStr:string;
    this.inicio = inicio;
    this.fin = fin;

    
    inicioStr = inicio.getDate() + '-' + (inicio.getMonth() + 1) + '-' + inicio.getFullYear();
    finStr = fin.getDate() + '-' + (fin.getMonth() + 1) + '-' + fin.getFullYear();
    //Ahora necesitamos obtener un cliente pero necesita un dni ¿cómo le eviamos el dni? (sin que sea hardcodeado)
    this.trayectosService.getTrayectos(this.loginService.userDni, inicioStr, finStr).subscribe(data => {
      
      this.trayectos = data;

      for (let trayecto of this.trayectos){
        trayecto.mapImage = Math.floor(Math.random() * 6);
        this.getCalidadConduccion(trayecto);
      }


    });
  }    

  getCalidadConduccion(trayecto:Trayecto){
    let calidad:number;

    calidad = this.trayectosService.getCalidadConduccion(trayecto);
    trayecto.calidad = calidad;
    
  }

  verDetalleTrayecto(dni:string, id:number){

    this.router.navigateByUrl('/detalletrayecto/'+ dni + '/'+ id);
   
  }

}
