import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SetProfessionCommand } from './set-profession.command';

export const SET_PROFESSION_COMMAND_PORT =
  new InjectionToken<SetProfessionCommandPort>('SET_PROFESSION_COMMAND_PORT');

export interface SetProfessionCommandPort {
  setProfession(command: SetProfessionCommand): Observable<void>;
}
