import { RouterModule } from '@angular/router';
import { MaterialDesignModule} from './../material-design/material-design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavListComponent } from './components/nav-list/nav-list.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,
    RouterModule
  ],
  declarations: [NavListComponent],
  exports: [NavListComponent]
})
export class SharedModule { }
