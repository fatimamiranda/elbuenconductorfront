import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../model/Cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  //declaramos la url
  URL = 'http://10.250.5.4:8080/api/clientes/';
  //inyectamos el httpclient
  
  constructor(private http: HttpClient) { }


  getCliente(codigo:number):Observable<Cliente>{

    return this.http.get<Cliente>(this.URL + codigo);
  }

  
}
