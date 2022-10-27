import { NgModule } from '@angular/core';
import { CharacterState } from './character.state';
import { SET_RACE_COMMAND_PORT } from './ports/primary/command/set-race.command-port';
import { GET_RACE_COMMAND_PORT } from './ports/primary/command/get-race.command-port';
import { SET_PROFESSION_COMMAND_PORT } from './ports/primary/command/set-profession.command-port';
import { GET_PROFESSION_COMMAND_PORT } from './ports/primary/command/get-profession.command-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    CharacterState,
    { provide: SET_RACE_COMMAND_PORT, useExisting: CharacterState },
    { provide: GET_RACE_COMMAND_PORT, useExisting: CharacterState },
    { provide: SET_PROFESSION_COMMAND_PORT, useExisting: CharacterState },
    { provide: GET_PROFESSION_COMMAND_PORT, useExisting: CharacterState }
  ],
  exports: [],
})
export class CharacterStateModule { }
