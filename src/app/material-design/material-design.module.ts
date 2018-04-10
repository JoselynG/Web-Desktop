import { NgModule } from '@angular/core';
import {MatGridListModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatToolbarModule, MatStepperModule, MatRippleModule, MatExpansionModule, MatListModule, MatIconModule, MatMenuModule, MatSelectModule } from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatToolbarModule, MatStepperModule, MatRippleModule, MatExpansionModule, MatListModule, MatIconModule, MatMenuModule, MatSelectModule],
  exports: [MatGridListModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatToolbarModule, MatStepperModule, MatRippleModule, MatExpansionModule, MatListModule, MatIconModule, MatMenuModule, MatSelectModule],
})
export class MaterialDesignModule { }
