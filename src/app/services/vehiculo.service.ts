import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../model/Vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  URL = 'https://elbuenconductor.herokuapp.com/api/vehiculos/';
  
  //inyectamos el httpclient
  constructor(private http:HttpClient) { }

  getParqueVehiculos(){
    return this.http.get<Vehiculo[]>(this.URL);
  }

  getVehiculos(matricula:string){
    return this.http.get<Vehiculo>(this.URL + matricula);
  }
}
