import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatToolbarModule, MatStepperModule, MatRippleModule, MatExpansionModule, MatSlideToggleModule, MatDialogModule, MatListModule, MatIconModule, MatMenuModule, MatSelectModule, MatTooltipModule, MatChipsModule} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatToolbarModule, MatStepperModule, MatRippleModule, MatExpansionModule, MatSlideToggleModule, MatDialogModule, MatListModule, MatIconModule, MatMenuModule, MatSelectModule, MatChipsModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatToolbarModule, MatStepperModule, MatRippleModule, MatExpansionModule, MatSlideToggleModule, MatDialogModule, MatListModule, MatIconModule, MatMenuModule, MatSelectModule, MatChipsModule],
})
export class MaterialDesignModule { }
