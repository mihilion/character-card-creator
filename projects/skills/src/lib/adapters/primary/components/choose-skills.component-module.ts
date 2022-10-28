import { NgModule } from '@angular/core';
import { ChooseSkillsComponent } from './choose-skills.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    MatButtonModule,
    RouterLink
  ],
  declarations: [ChooseSkillsComponent],
  providers: [],
  exports: [ChooseSkillsComponent]
})
export class ChooseSkillsComponentModule {
}
