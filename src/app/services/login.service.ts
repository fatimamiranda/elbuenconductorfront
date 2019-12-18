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
    console.log(inputDni);

    if (this.DNIs.includes(inputDni)){
      
      this.userDni = inputDni;
      isLogged = true;
    }

    console.log(isLogged);
    return isLogged;
  }

  

  /*
  login(username:string, password:string) {
    return this.http.post('https://reqres.in/api/login', {
      email: username,
      password: password,     
    });     
  }
  */

}
