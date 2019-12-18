import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {ContextMenuModule} from 'primeng/contextmenu';
import {BreadcrumbModule} from 'primeng/breadcrumb';
;

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContextMenuModule,
    MenuModule,
    BreadcrumbModule
    
  ],
  exports:[ 
    ContextMenuModule,
    MenuModule,
    BreadcrumbModule
  ]
})
export class PrimengModule { }
