import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MenuModule} from 'primeng/menu';
import {ContextMenuModule} from 'primeng/contextmenu';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {TableModule} from 'primeng/table';
;

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContextMenuModule,
    MenuModule,
    BreadcrumbModule,
    TableModule
  ],
  exports:[ 
    ContextMenuModule,
    MenuModule,
    BreadcrumbModule,
    TableModule
  ]
})
export class PrimengModule { }
