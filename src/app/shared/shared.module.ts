
import { MaterialDesignModule} from './../material-design/material-design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageComponent } from './components/background-image/background-image.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,

  ],
  declarations: [BackgroundImageComponent],
  exports: [MaterialDesignModule, BackgroundImageComponent, CommonModule]
})
export class SharedModule { }
