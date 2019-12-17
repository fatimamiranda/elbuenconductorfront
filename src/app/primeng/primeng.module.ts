import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {ContextMenuModule} from 'primeng/contextmenu';
;

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContextMenuModule,
    MenuModule
    
  ],
  exports:[ 
    ContextMenuModule,
    MenuModule
  ]
})
export class PrimengModule { }
