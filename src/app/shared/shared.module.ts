
import { MaterialDesignModule} from './../material-design/material-design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,

  ],
  declarations: [],
  exports: [MaterialDesignModule, CommonModule]
})
export class SharedModule { }
