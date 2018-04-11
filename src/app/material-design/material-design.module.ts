import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatToolbarModule, MatStepperModule, MatRippleModule, MatExpansionModule, MatSlideToggleModule, MatDialogModule, MatListModule, MatIconModule, MatMenuModule, MatSelectModule, MatTooltipModule, MatChipsModule, MatTableModule, MatPaginatorModule} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatTableModule, MatPaginatorModule, MatCheckboxModule, MatCardModule, MatInputModule, MatToolbarModule, MatStepperModule, MatRippleModule, MatExpansionModule, MatSlideToggleModule, MatDialogModule, MatListModule, MatIconModule, MatMenuModule, MatSelectModule, MatChipsModule, MatTooltipModule],
  exports: [MatButtonModule, MatTableModule, MatPaginatorModule, MatCheckboxModule, MatCardModule, MatInputModule, MatToolbarModule, MatStepperModule, MatRippleModule, MatExpansionModule, MatSlideToggleModule, MatDialogModule, MatListModule, MatIconModule, MatMenuModule, MatSelectModule, MatChipsModule, MatTooltipModule],
})
export class MaterialDesignModule { }
