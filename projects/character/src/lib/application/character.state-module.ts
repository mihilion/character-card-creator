import { NgModule } from '@angular/core';
import { CharacterState } from './character.state';
import { SET_RACE_COMMAND_PORT } from './ports/primary/command/set-race.command-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [CharacterState, { provide: SET_RACE_COMMAND_PORT, useExisting: CharacterState }],
  exports: []
})
export class CharacterStateModule {
}
