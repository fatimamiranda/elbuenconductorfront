import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatBottomSheetModule,
    MatExpansionModule,
    MatSidenavModule
  ],
  exports:[
    MatMenuModule,
    MatIconModule,
    MatBottomSheetModule,
    MatExpansionModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
