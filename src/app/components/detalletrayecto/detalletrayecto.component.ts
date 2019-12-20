import { Component, OnInit } from '@angular/core';
import { TrayectosService } from 'src/app/services/trayectos.service';
import { Trayecto } from 'src/app/model/Trayecto';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalletrayecto',
  templateUrl: './detalletrayecto.component.html',
  styleUrls: ['./detalletrayecto.component.css']
})
export class DetalletrayectoComponent implements OnInit {

  trayecto:Trayecto = undefined;

  constructor(private trayectoServices:TrayectosService, 
              private router:Router,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(x=> {
      this.trayectoServices.getTrayectoById(x.dni,Number(x.id)).subscribe(d=>{
        this.trayecto = new Trayecto (d.id, d.dni, d.matricula, d.kmRecorridos, d.nAcelerones, d.nFrenazos, d.rpmMedias, d.inicio, d.fin, d.precio, d.calidad, d.mapImage);
      });
    })

  }}