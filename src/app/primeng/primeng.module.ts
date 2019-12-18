import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MenuModule} from 'primeng/menu';
import {ContextMenuModule} from 'primeng/contextmenu';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContextMenuModule,
    MenuModule,
    BreadcrumbModule,
    TableModule,
    CalendarModule
  ],
  exports:[ 
    ContextMenuModule,
    MenuModule,
    BreadcrumbModule,
    TableModule,
    CalendarModule
  ]
})
export class PrimengModule { }
