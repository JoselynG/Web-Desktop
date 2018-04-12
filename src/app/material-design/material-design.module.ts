import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatToolbarModule, MatStepperModule, MatRippleModule, MatExpansionModule, MatSlideToggleModule, MatDialogModule, MatListModule, MatIconModule, MatMenuModule, MatSelectModule, MatTooltipModule, MatChipsModule, MatTableModule, MatPaginatorModule, MatSnackBarModule, MatDatepickerModule} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatTableModule, MatPaginatorModule, MatCheckboxModule, MatCardModule, MatInputModule, MatToolbarModule, MatStepperModule, MatRippleModule, MatExpansionModule, MatSlideToggleModule, MatDialogModule, MatListModule, MatIconModule, MatMenuModule, MatSelectModule, MatChipsModule, MatTooltipModule, MatSnackBarModule, MatDatepickerModule],
  exports: [MatButtonModule, MatTableModule, MatPaginatorModule, MatCheckboxModule, MatCardModule, MatInputModule, MatToolbarModule, MatStepperModule, MatRippleModule, MatExpansionModule, MatSlideToggleModule, MatDialogModule, MatListModule, MatIconModule, MatMenuModule, MatSelectModule, MatChipsModule, MatTooltipModule, MatSnackBarModule, MatDatepickerModule],
})
export class MaterialDesignModule { }
