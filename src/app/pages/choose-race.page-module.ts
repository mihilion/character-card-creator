import { NgModule } from '@angular/core';
import {
  CharacterLocalStorageModule,
  CharacterStateModule,
  ChooseRaceComponentModule,
} from '@character';
import { ChooseRacePage } from './choose-race.page';

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
