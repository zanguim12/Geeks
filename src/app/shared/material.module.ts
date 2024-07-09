import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatPseudoCheckboxModule } from "@angular/material/core"; // PseudoCheckbox is part of @angular/material/core
import { MatRadioModule } from "@angular/material/radio";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatPseudoCheckboxModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ]
})
export class MaterialModule {}
