import { NgModule } from '@angular/core';
import { ChooseSkillsComponentModule } from '@skills';
import { ChooseSkillsPage } from './choose-skills.page';
import { CharacterLocalStorageModule, CharacterStateModule } from '@character';

@NgModule({
  imports: [ChooseSkillsComponentModule,
    CharacterStateModule,
    CharacterLocalStorageModule,],
  declarations: [ChooseSkillsPage],
  providers: [],
  exports: [ChooseSkillsPage]
})
export class ChooseSkillsPageModule {
}
