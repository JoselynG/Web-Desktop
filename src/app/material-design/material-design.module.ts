import { NgModule } from '@angular/core';
import {MatGridListModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatToolbarModule, MatStepperModule, MatRippleModule, MatExpansionModule, MatListModule, MatIconModule, MatMenuModule, MatSelectModule, MatDividerModule } from '@angular/material';


@NgModule({
  imports: [MatGridListModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatToolbarModule, MatStepperModule, MatRippleModule, MatExpansionModule, MatListModule, MatIconModule, MatMenuModule, MatSelectModule, MatDividerModule],
  exports: [MatGridListModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatToolbarModule, MatStepperModule, MatRippleModule, MatExpansionModule, MatListModule, MatIconModule, MatMenuModule, MatSelectModule, MatDividerModule],
})
export class MaterialDesignModule { }
