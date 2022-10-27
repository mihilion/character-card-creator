import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ChooseProfessionComponent} from './choose-profession.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from '@angular/router';

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatSelectModule, CommonModule, MatButtonModule, RouterLink],
  declarations: [ChooseProfessionComponent],
  providers: [],
  exports: [ChooseProfessionComponent]
})
export class ChooseProfessionComponentModule {
}
