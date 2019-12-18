import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trayecto } from '../model/Trayecto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrayectosService {

  //declaramos la url
  URL = 'https://elbuenconductor.herokuapp.com/api/clientes/';


  //inyectamos el httpclient
  constructor(private http: HttpClient) { }

  getTrayectos(dni:String, inicio:string, fin:string):Observable<Trayecto[]>{
    //dni:String, inicio:string, fin:string
    console.log('hola')
    return this.http.get<Trayecto[]>(this.URL + dni + '/' + inicio + '/' + fin);
  
  }
}