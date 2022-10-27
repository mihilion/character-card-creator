import { NgModule } from '@angular/core';
import {
  CharacterLocalStorageModule,
  CharacterStateModule,
} from '@character';
import { ChooseProfessionPage } from './choose-profession.page';
import { ChooseProfessionComponentModule } from '@profession';

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
