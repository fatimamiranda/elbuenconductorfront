import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trayecto } from '../model/Trayecto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrayectosService {

  topeFrenazosPorKm:number = 0.2;
  topeAceleronesPorKm:number = 0.2;
 topeRpm:number = 3500;
  minRpm:number = 2500;
  
  //declaramos la url
  URL = 'https://elbuenconductor.herokuapp.com/api/clientes/';


  //inyectamos el httpclient
  constructor(private http: HttpClient) { }

  getTrayectoById(dni:String, id:number){
    return this.http.get<Trayecto>(this.URL+dni+'/'+id);
  }

  getTrayectos(dni:String, inicio:string, fin:string):Observable<Trayecto[]>{
   
    return this.http.get<Trayecto[]>(this.URL + dni + '/' + inicio + '/' + fin);
  
  }

  getFactorAcelerones(trayecto:Trayecto):number{
    let tope:number = this.topeAceleronesPorKm * trayecto.kmRecorridos;
    let factor:number;

    if(trayecto.nAcelerones > tope) {
			factor = 1.0;
		} else {
			factor = trayecto.nAcelerones/tope;
		}
		
		return factor;

  }

  getFactorFrenazos( trayecto:Trayecto):number {
		
		let tope = this.topeFrenazosPorKm * trayecto.kmRecorridos;
		
		let factor;
		
		if(trayecto.nFrenazos > tope) {
			factor = 1.0;
		} else {
			factor = trayecto.nFrenazos/tope;
		}
		
		return factor;
		
  }
  
  getFactorRpm( trayecto:Trayecto) {
		
		let factor;
		
		if (trayecto.rpmMedias < this.minRpm) {
			factor = 0;
		} else if(trayecto.rpmMedias  < this.topeRpm){
			factor = (trayecto.rpmMedias  - this.minRpm)
					/ (this.topeRpm - this.minRpm);
		} else {
			factor = 1;
		}
		
		return factor;
  }
  

  getCalidadConduccion(trayecto:Trayecto):number{
    
    return 10 - 4 * (this.getFactorAcelerones(trayecto) + this.getFactorFrenazos(trayecto))
    - 2 * this.getFactorRpm(trayecto);

     
  }
}