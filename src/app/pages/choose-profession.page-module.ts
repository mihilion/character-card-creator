import { NgModule } from '@angular/core';
import {
  CharacterLocalStorageModule,
  CharacterStateModule,
  ChooseProfessionComponentModule,
} from '@character';
import { ChooseProfessionPage } from './choose-profession.page';

@NgModule({
  imports: [
    ChooseProfessionComponentModule,
    CharacterStateModule,
    CharacterLocalStorageModule,
  ],
  declarations: [ChooseProfessionPage],
  providers: [],
  exports: [ChooseProfessionPage],
})
export class ChooseProfessionPageModule {}
