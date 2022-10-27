import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterContext } from './character.context';

export const CHARACTER_CONTEXT_PORT = new InjectionToken<CharacterContextPort>('CHARACTER_CONTEXT_PORT');

export interface CharacterContextPort {
  setState(context: CharacterContext): Observable<void>;
  getState(): Observable<CharacterContext>;
}
