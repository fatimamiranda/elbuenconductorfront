import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  constructor() { }

  private items: MenuItem[];
    
  ngOnInit() {
      this.items = [
          {label:'HOME'},
          {label:'Perfil'},
          {label:'Vehículos'},
          {label:'Trayectos'},
          
          //{label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
      ];
  }

}
