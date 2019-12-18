import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputDni:String = undefined;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {

  }

  logIn(){
    let isLogged = this.loginService.logIn(this.inputDni);

    if (isLogged){
      this.navigate();
    } else {
      alert('El usuario no existe');
    }
  }

  navigate() {    
    this.router.navigateByUrl('perfil');
  }

}


