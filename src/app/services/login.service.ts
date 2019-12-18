import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  DNIs:String[] = ['12345678A','87654321V','44678910Y'];
  userDni:String = undefined;

  constructor() {
  }

  logIn(inputDni:String):boolean{

    let isLogged:boolean = false;

    if (this.DNIs.includes(inputDni)){
      
      this.userDni = inputDni;
      isLogged = true;
    }

    return isLogged;
  }

}
