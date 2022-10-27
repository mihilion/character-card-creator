import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChooseRaceComponent } from './choose-race.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule,
  ],
  declarations: [ChooseRaceComponent],
  providers: [],
  exports: [ChooseRaceComponent],
})
export class ChooseRaceComponentModule {}
