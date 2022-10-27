import { NgModule } from '@angular/core';
import {
  CharacterLocalStorageModule,
  CharacterStateModule,
} from '@character';
import { ChooseRacePage } from './choose-race.page';
import { ChooseRaceComponentModule } from '@race';

@NgModule({
  imports: [
    ChooseRaceComponentModule,
    CharacterStateModule,
    CharacterLocalStorageModule,
  ],
  declarations: [ChooseRacePage],
  providers: [],
  exports: [ChooseRacePage],
})
export class ChooseRacePageModule {}
