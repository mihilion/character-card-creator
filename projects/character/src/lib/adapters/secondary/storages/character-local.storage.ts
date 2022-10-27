import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { CharacterContextPort } from '../../../application/ports/secondary/context/character.context-port';
import { CharacterContext } from '../../../application/ports/secondary/context/character.context';

@Injectable()
export class CharacterLocalStorage implements CharacterContextPort {
  setState(context: CharacterContext): Observable<void> {
    //set to localStorage
    localStorage.setItem('characterContext', JSON.stringify(context));
    return of(void 0);
  }

  getState(): Observable<CharacterContext> {
    // get from localstorage
    const character = JSON.parse(localStorage.getItem('characterContext') || "{}");
    return of(character);
  }
}
