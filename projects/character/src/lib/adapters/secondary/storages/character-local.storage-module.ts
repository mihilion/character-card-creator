import { NgModule } from '@angular/core';
import { CharacterLocalStorage } from './character-local.storage';
import { CHARACTER_CONTEXT_PORT } from '../../../application/ports/secondary/context/character.context-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [CharacterLocalStorage, { provide: CHARACTER_CONTEXT_PORT, useExisting: CharacterLocalStorage }],
  exports: []
})
export class CharacterLocalStorageModule {
}
