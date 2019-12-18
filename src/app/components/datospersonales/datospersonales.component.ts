import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-datospersonales',
  templateUrl: './datospersonales.component.html',
  styleUrls: ['./datospersonales.component.css']
})
export class DatospersonalesComponent implements OnInit {

  cliente:Cliente = undefined;

  constructor(private router:Router, 
              private clienteService:ProfileService,
              private loginService:LoginService) { }

  ngOnInit() {
    this.cliente = new Cliente();
    
    //Ahora necesitamos obtener un cliente pero necesita un dni ¿cómo le eviamos el dni? (sin que sea hardcodeado)
    this.clienteService.getCliente(this.loginService.userDni).subscribe(data => {
         this.cliente = data
    })
  }

}
