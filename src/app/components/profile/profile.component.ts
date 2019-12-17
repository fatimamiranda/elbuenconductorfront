import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  cliente:Cliente = undefined;

  constructor(private router:Router, private clienteService:ProfileService) { }

  ngOnInit() {
    this.cliente=new Cliente(); //esto no sé si hace falta

    //Ahora necesitamos obtener un cliente pero necesita un dni ¿cómo le eviamos el dni? (sin que sea hardcodeado)
   this.clienteService.getCliente(this.cliente.dni).subscribe(data => {
      console.log(data)
    })
  }

}
