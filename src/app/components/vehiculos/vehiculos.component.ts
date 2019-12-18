import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/model/Vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  Vehiculos:Vehiculo[] = undefined

  constructor(private vehiculoService:VehiculoService) { }

  ngOnInit() {

    this.vehiculoService.getParqueVehiculos().subscribe(data => {
      this.Vehiculos = data;
      console.log(this.Vehiculos);
      });
  }

}
