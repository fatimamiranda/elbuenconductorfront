import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MenuModule} from 'primeng/menu';
import {ContextMenuModule} from 'primeng/contextmenu';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContextMenuModule,
    MenuModule,
    BreadcrumbModule,
    TableModule,
    CalendarModule,
    CardModule
  ],
  exports:[ 
    ContextMenuModule,
    MenuModule,
    BreadcrumbModule,
    TableModule,
    CalendarModule,
    CardModule
  ]
})
export class PrimengModule { }
